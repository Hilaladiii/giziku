import { AddMenus } from "@/lib/DBService/dbMenu";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const dataMenu = await req.json();
  const res = await AddMenus(dataMenu);
  return NextResponse.json(res);
}
