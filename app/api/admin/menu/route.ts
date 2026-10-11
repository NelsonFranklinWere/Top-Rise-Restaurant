import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/auth";
import { createMenuItem, listMenu } from "@/lib/db";
import { parseMenuInput } from "@/lib/menu-validate";

export const dynamic = "force-dynamic";

const unauthorized = () => NextResponse.json({ error: "Sign in first" }, { status: 401 });

/** Every dish, including hidden ones. */
export async function GET() {
  if (!(await isAdminRequest())) return unauthorized();
  try {
    return NextResponse.json({ items: await listMenu({ includeUnavailable: true }) });
  } catch (error) {
    console.error("GET /api/admin/menu failed:", error);
    return NextResponse.json({ error: "Database is unavailable" }, { status: 503 });
  }
}

export async function POST(request: Request) {
  if (!(await isAdminRequest())) return unauthorized();
  const parsed = parseMenuInput(await request.json().catch(() => null));
  if (!parsed.ok) return NextResponse.json({ error: parsed.error }, { status: 400 });
  try {
    return NextResponse.json({ item: await createMenuItem(parsed.value) }, { status: 201 });
  } catch (error) {
    console.error("POST /api/admin/menu failed:", error);
    return NextResponse.json({ error: "Could not save the dish" }, { status: 500 });
  }
}
