import { AddMenu } from "@/lib/DBService/dbMenu";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const dataMenu = await req.json();
  const res = await AddMenu(dataMenu);
  NextResponse.json({
    status: res.status,
    message: res.message,
  });
}
