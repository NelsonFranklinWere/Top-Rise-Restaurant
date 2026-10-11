import { NextResponse } from "next/server";
import { listMenu } from "@/lib/db";

export const dynamic = "force-dynamic";

/** Public menu: only dishes marked available. */
export async function GET() {
  try {
    const items = await listMenu();
    return NextResponse.json({ items }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("GET /api/menu failed:", error);
    return NextResponse.json({ error: "Menu is unavailable" }, { status: 503 });
  }
}
