import { AddMenus } from "@/lib/DBService/dbMenu";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const dataMenu = await req.json();
  console.log(dataMenu);
  const res = await AddMenus(dataMenu);
  return NextResponse.json({
    status: res.status,
    message: res.message,
  });
}
