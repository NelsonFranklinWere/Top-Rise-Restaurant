import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return NextResponse.json({ signedIn: await isAdminRequest() });
  } catch {
    return NextResponse.json({ signedIn: false });
  }
}
