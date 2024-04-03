import { getAllMenus } from "@/lib/DBService/dbMenu";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("query") || "";
  const currPage = Number(req.nextUrl.searchParams.get("page")) || 1;
  const res = await getAllMenus({ query, currPage });
  return NextResponse.json(res);
}
