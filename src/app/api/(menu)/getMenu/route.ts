import { getAllMenus } from "@/lib/DBService/dbMenu";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const res = await getAllMenus();
  return NextResponse.json(res);
}
