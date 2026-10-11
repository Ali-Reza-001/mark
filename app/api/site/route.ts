import { NextResponse } from "next/server";
import { site } from "@/lib/data";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json(site);
}
