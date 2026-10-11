import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/auth";
import { deleteMenuItem, updateMenuItem } from "@/lib/db";
import { parseMenuInput } from "@/lib/menu-validate";

export const dynamic = "force-dynamic";

const unauthorized = () => NextResponse.json({ error: "Sign in first" }, { status: 401 });

function parseId(raw: string): number | null {
  const id = Number(raw);
  return Number.isInteger(id) && id > 0 ? id : null;
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  if (!isAdminRequest()) return unauthorized();
  const id = parseId(params.id);
  if (!id) return NextResponse.json({ error: "Unknown dish" }, { status: 404 });

  const parsed = parseMenuInput(await request.json().catch(() => null));
  if (!parsed.ok) return NextResponse.json({ error: parsed.error }, { status: 400 });

  try {
    const item = await updateMenuItem(id, parsed.value);
    if (!item) return NextResponse.json({ error: "Unknown dish" }, { status: 404 });
    return NextResponse.json({ item });
  } catch (error) {
    console.error("PUT /api/admin/menu/[id] failed:", error);
    return NextResponse.json({ error: "Could not save the dish" }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  if (!isAdminRequest()) return unauthorized();
  const id = parseId(params.id);
  if (!id) return NextResponse.json({ error: "Unknown dish" }, { status: 404 });

  try {
    const removed = await deleteMenuItem(id);
    if (!removed) return NextResponse.json({ error: "Unknown dish" }, { status: 404 });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("DELETE /api/admin/menu/[id] failed:", error);
    return NextResponse.json({ error: "Could not delete the dish" }, { status: 500 });
  }
}
