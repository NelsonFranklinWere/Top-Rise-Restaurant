"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Eye, EyeOff, LogOut, Pencil, Plus, Trash2, X } from "lucide-react";
import { drinkImages, foodImages } from "@/lib/images";
import { MENU_CATEGORIES } from "@/lib/menu-validate";
import { formatMenuPrice } from "@/lib/order-links";
import type { MenuCategory, MenuItem } from "@/lib/types";

type Draft = {
  id: string | null;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  image: string;
  isVegetarian: boolean;
  spiceLevel: "" | "mild" | "medium" | "hot";
  isAvailable: boolean;
  sortOrder: string;
};

const emptyDraft = (category: MenuCategory): Draft => ({
  id: null,
  name: "",
  description: "",
  price: "",
  category,
  image: "",
  isVegetarian: false,
  spiceLevel: "",
  isAvailable: true,
  sortOrder: "0",
});

const pictureChoices = [...Object.entries(foodImages), ...Object.entries(drinkImages)].map(([key, src]) => ({
  src,
  label: key.replace(/([a-z])([A-Z0-9])/g, "$1 $2").toLowerCase(),
}));

const inputClass =
  "w-full px-4 py-3 bg-charcoal-800 border border-gold-500/20 rounded-xl text-ivory placeholder:text-champagne/35 focus:outline-none focus:border-accent-500/60";
const labelClass = "block text-xs tracking-wide uppercase text-champagne/60 mb-2";

async function api<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...init,
    headers: { "Content-Type": "application/json", ...(init?.headers ?? {}) },
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.error || "Something went wrong");
  }
  return data as T;
}

export default function AdminPage() {
  const [signedIn, setSignedIn] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [items, setItems] = useState<MenuItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("mains");
  const [draft, setDraft] = useState<Draft | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const [loadingItems, setLoadingItems] = useState(false);

  const loadItems = useCallback(async () => {
    setLoadingItems(true);
    try {
      const data = await api<{ items: MenuItem[] }>("/api/admin/menu/");
      setItems(data.items);
      setError("");
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoadingItems(false);
    }
  }, []);

  useEffect(() => {
    api<{ signedIn: boolean }>("/api/admin/session/")
      .then((data) => {
        setSignedIn(data.signedIn);
        if (data.signedIn) loadItems();
      })
      .catch(() => setSignedIn(false));
  }, [loadItems]);

  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(""), 3000);
    return () => clearTimeout(timer);
  }, [notice]);

  const visibleItems = useMemo(
    () => items.filter((item) => item.category === activeCategory),
    [items, activeCategory]
  );

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      await api("/api/admin/login/", { method: "POST", body: JSON.stringify({ password }) });
      setPassword("");
      setSignedIn(true);
      await loadItems();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  };

  const signOut = async () => {
    await api("/api/admin/logout/", { method: "POST" }).catch(() => undefined);
    setSignedIn(false);
    setItems([]);
    setDraft(null);
  };

  const startEdit = (item: MenuItem) =>
    setDraft({
      id: item.id,
      name: item.name,
      description: item.description,
      price: String(item.price),
      category: item.category,
      image: item.image ?? "",
      isVegetarian: Boolean(item.isVegetarian),
      spiceLevel: item.spiceLevel ?? "",
      isAvailable: item.isAvailable !== false,
      sortOrder: String(item.sortOrder ?? 0),
    });

  const toPayload = (d: Draft) => ({
    name: d.name,
    description: d.description,
    price: Number(d.price),
    category: d.category,
    image: d.image || null,
    isVegetarian: d.isVegetarian,
    spiceLevel: d.spiceLevel || null,
    isAvailable: d.isAvailable,
    sortOrder: Number(d.sortOrder || 0),
  });

  const saveDraft = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!draft) return;
    setBusy(true);
    setError("");
    try {
      if (draft.id) {
        await api(`/api/admin/menu/${draft.id}/`, { method: "PUT", body: JSON.stringify(toPayload(draft)) });
        setNotice(`${draft.name} updated`);
      } else {
        await api("/api/admin/menu/", { method: "POST", body: JSON.stringify(toPayload(draft)) });
        setNotice(`${draft.name} added`);
      }
      setActiveCategory(draft.category);
      setDraft(null);
      await loadItems();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  };

  const toggleAvailable = async (item: MenuItem) => {
    const next = item.isAvailable === false;
    try {
      await api(`/api/admin/menu/${item.id}/`, {
        method: "PUT",
        body: JSON.stringify({
          ...item,
          image: item.image ?? null,
          spiceLevel: item.spiceLevel ?? null,
          isVegetarian: Boolean(item.isVegetarian),
          sortOrder: item.sortOrder ?? 0,
          isAvailable: next,
        }),
      });
      setNotice(next ? `${item.name} is back on the menu` : `${item.name} hidden from the menu`);
      await loadItems();
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const removeItem = async (item: MenuItem) => {
    if (!window.confirm(`Delete "${item.name}" from the menu? This cannot be undone.`)) return;
    try {
      await api(`/api/admin/menu/${item.id}/`, { method: "DELETE" });
      setNotice(`${item.name} deleted`);
      await loadItems();
    } catch (err) {
      setError((err as Error).message);
    }
  };

  if (signedIn === null) {
    return <div className="min-h-screen bg-charcoal-950 pt-40 text-center text-champagne/60">Loading…</div>;
  }

  if (!signedIn) {
    return (
      <div className="min-h-screen bg-charcoal-950 flex items-center justify-center px-4 pt-24 pb-16">
        <form onSubmit={signIn} className="w-full max-w-sm p-8 border border-gold-500/20 bg-charcoal-900/80">
          <p className="text-accent-400 text-xs tracking-[0.3em] uppercase mb-3">Staff Only</p>
          <h1 className="font-display text-3xl text-ivory mb-6">Menu Admin</h1>
          <label htmlFor="password" className={labelClass}>Password</label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputClass}
          />
          {error && <p className="text-red-400 text-sm mt-4">{error}</p>}
          <button
            type="submit"
            disabled={busy}
            className="mt-6 w-full py-3 rounded-full bg-gradient-to-r from-accent-600 to-accent-500 text-white text-sm font-semibold tracking-wide uppercase disabled:opacity-50"
          >
            {busy ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-charcoal-950 pt-28 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-accent-400 text-xs tracking-[0.3em] uppercase mb-2">Menu Admin</p>
            <h1 className="font-display text-3xl md:text-4xl text-ivory">Edit the Menu</h1>
            <p className="text-champagne/60 text-sm mt-2">
              Changes show on the website immediately.{" "}
              {loadingItems && items.length === 0 ? "Loading dishes…" : `${items.length} dishes in total.`}
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setDraft(emptyDraft(activeCategory))}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent-600 to-accent-500 text-white text-xs font-semibold tracking-wide uppercase"
            >
              <Plus className="w-4 h-4" /> Add Dish
            </button>
            <button
              onClick={signOut}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold-500/30 text-champagne/80 text-xs font-semibold tracking-wide uppercase hover:text-ivory"
            >
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>
        </div>

        {error && <p className="mb-6 p-4 border border-red-500/40 bg-red-500/10 text-red-300 text-sm">{error}</p>}
        {notice && <p className="mb-6 p-4 border border-green-500/40 bg-green-500/10 text-green-300 text-sm">{notice}</p>}

        <div className="flex gap-3 overflow-x-auto mb-8">
          {MENU_CATEGORIES.map((category) => {
            const count = items.filter((item) => item.category === category.id).length;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-xs tracking-wide uppercase whitespace-nowrap font-semibold transition-colors ${
                  activeCategory === category.id
                    ? "bg-gold-500 text-charcoal-950"
                    : "border border-gold-500/25 text-champagne/70 hover:text-ivory"
                }`}
              >
                {category.label} · {count}
              </button>
            );
          })}
        </div>

        <div className="border border-gold-500/15 divide-y divide-gold-500/10">
          {visibleItems.length === 0 && (
            <p className="p-8 text-center text-champagne/50 text-sm">
              {loadingItems && items.length === 0 ? "Loading the menu…" : "No dishes in this section yet."}
            </p>
          )}
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className={`flex items-center gap-4 p-4 ${item.isAvailable === false ? "opacity-50" : ""}`}
            >
              <div className="relative w-16 h-16 flex-shrink-0 bg-charcoal-800 overflow-hidden">
                {item.image && <Image src={item.image} alt="" fill className="object-cover" unoptimized />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display text-lg text-ivory truncate">
                  {item.name}
                  {item.isAvailable === false && (
                    <span className="ml-3 text-[10px] tracking-wide uppercase text-red-300 border border-red-400/40 px-2 py-0.5 rounded-full align-middle">
                      Hidden
                    </span>
                  )}
                </p>
                <p className="text-champagne/55 text-sm truncate">{item.description}</p>
              </div>
              <p className="font-display text-lg text-gold-300 whitespace-nowrap">{formatMenuPrice(item.price)}</p>
              <div className="flex gap-1">
                <button
                  onClick={() => toggleAvailable(item)}
                  title={item.isAvailable === false ? "Show on menu" : "Hide from menu (sold out)"}
                  className="p-2.5 text-champagne/60 hover:text-ivory"
                >
                  {item.isAvailable === false ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
                <button onClick={() => startEdit(item)} title="Edit" className="p-2.5 text-champagne/60 hover:text-gold-300">
                  <Pencil className="w-4 h-4" />
                </button>
                <button onClick={() => removeItem(item)} title="Delete" className="p-2.5 text-champagne/60 hover:text-red-400">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {draft && (
        <div className="fixed inset-0 z-[70] flex items-start md:items-center justify-center p-4 overflow-y-auto">
          <div className="absolute inset-0 bg-charcoal-950/85 backdrop-blur-sm" onClick={() => setDraft(null)} aria-hidden="true" />
          <form
            onSubmit={saveDraft}
            className="relative w-full max-w-xl bg-charcoal-900 border border-gold-500/25 p-6 md:p-8 my-8"
          >
            <button
              type="button"
              onClick={() => setDraft(null)}
              className="absolute top-4 right-4 p-2 text-champagne/50 hover:text-ivory"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="font-display text-2xl text-ivory mb-6">{draft.id ? "Edit Dish" : "Add a Dish"}</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="dish-name">Name</label>
                <input
                  id="dish-name"
                  required
                  maxLength={80}
                  value={draft.name}
                  onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                  className={inputClass}
                  placeholder="Beef Pilau"
                />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="dish-description">Description</label>
                <textarea
                  id="dish-description"
                  rows={2}
                  maxLength={300}
                  value={draft.description}
                  onChange={(e) => setDraft({ ...draft, description: e.target.value })}
                  className={`${inputClass} resize-none`}
                  placeholder="What comes on the plate"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="dish-price">Price (KES)</label>
                <input
                  id="dish-price"
                  type="number"
                  required
                  min={0}
                  step={10}
                  value={draft.price}
                  onChange={(e) => setDraft({ ...draft, price: e.target.value })}
                  className={inputClass}
                  placeholder="450"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="dish-category">Section</label>
                <select
                  id="dish-category"
                  value={draft.category}
                  onChange={(e) => setDraft({ ...draft, category: e.target.value as MenuCategory })}
                  className={inputClass}
                >
                  {MENU_CATEGORIES.map((c) => (
                    <option key={c.id} value={c.id}>{c.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass} htmlFor="dish-image">Picture</label>
                <select
                  id="dish-image"
                  value={draft.image}
                  onChange={(e) => setDraft({ ...draft, image: e.target.value })}
                  className={inputClass}
                >
                  <option value="">No picture</option>
                  {pictureChoices.map((p) => (
                    <option key={p.src} value={p.src}>{p.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass} htmlFor="dish-spice">Spice</label>
                <select
                  id="dish-spice"
                  value={draft.spiceLevel}
                  onChange={(e) => setDraft({ ...draft, spiceLevel: e.target.value as Draft["spiceLevel"] })}
                  className={inputClass}
                >
                  <option value="">Not spicy</option>
                  <option value="mild">Mild</option>
                  <option value="medium">Medium</option>
                  <option value="hot">Hot</option>
                </select>
              </div>
              <div>
                <label className={labelClass} htmlFor="dish-order">Position in section</label>
                <input
                  id="dish-order"
                  type="number"
                  min={0}
                  value={draft.sortOrder}
                  onChange={(e) => setDraft({ ...draft, sortOrder: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col justify-end gap-3 pb-1">
                <label className="flex items-center gap-3 text-sm text-champagne/80">
                  <input
                    type="checkbox"
                    checked={draft.isVegetarian}
                    onChange={(e) => setDraft({ ...draft, isVegetarian: e.target.checked })}
                    className="w-4 h-4 accent-green-500"
                  />
                  Vegetarian
                </label>
                <label className="flex items-center gap-3 text-sm text-champagne/80">
                  <input
                    type="checkbox"
                    checked={draft.isAvailable}
                    onChange={(e) => setDraft({ ...draft, isAvailable: e.target.checked })}
                    className="w-4 h-4 accent-green-500"
                  />
                  Available today
                </label>
              </div>
            </div>

            {draft.image && (
              <div className="relative h-36 mt-5 overflow-hidden border border-gold-500/15">
                <Image src={draft.image} alt="Selected picture" fill className="object-cover" unoptimized />
              </div>
            )}

            {error && <p className="text-red-400 text-sm mt-4">{error}</p>}

            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={() => setDraft(null)}
                className="px-6 py-3 rounded-full border border-gold-500/30 text-champagne/80 text-xs font-semibold tracking-wide uppercase"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={busy}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-accent-600 to-accent-500 text-white text-xs font-semibold tracking-wide uppercase disabled:opacity-50"
              >
                {busy ? "Saving…" : "Save Dish"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
