import { NextResponse } from "next/server";
import { SESSION_COOKIE, createSessionToken, passwordMatches } from "@/lib/auth";

export const dynamic = "force-dynamic";

// Slow down password guessing: five attempts per address every ten minutes.
const attempts = new Map<string, { count: number; resetAt: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 10 * 60 * 1000;

export async function POST(request: Request) {
  const address = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "local";
  const now = Date.now();
  const entry = attempts.get(address);
  if (entry && entry.resetAt > now && entry.count >= MAX_ATTEMPTS) {
    return NextResponse.json({ error: "Too many attempts. Try again in ten minutes." }, { status: 429 });
  }

  let password = "";
  try {
    const body = await request.json();
    password = typeof body?.password === "string" ? body.password : "";
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  try {
    if (!passwordMatches(password)) {
      const next = entry && entry.resetAt > now ? entry : { count: 0, resetAt: now + WINDOW_MS };
      next.count += 1;
      attempts.set(address, next);
      return NextResponse.json({ error: "Wrong password" }, { status: 401 });
    }

    attempts.delete(address);
    const { token, maxAge } = createSessionToken();
    const response = NextResponse.json({ ok: true });
    response.cookies.set(SESSION_COOKIE, token, {
      httpOnly: true,
      sameSite: "strict",
      // Secure whenever the visitor is on HTTPS (directly or behind a proxy),
      // so the built site can still be signed in to over plain http://localhost.
      secure:
        request.headers.get("x-forwarded-proto")?.split(",")[0].trim() === "https" ||
        new URL(request.url).protocol === "https:",
      path: "/",
      maxAge,
    });
    return response;
  } catch (error) {
    console.error("POST /api/admin/login failed:", error);
    return NextResponse.json({ error: "Admin login is not configured" }, { status: 500 });
  }
}
