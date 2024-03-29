import { getAllMenus } from "@/lib/DBService/dbMenu";
import { Eraser } from "lucide-react";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const res = await getAllMenus();
  return NextResponse.json({
    status: res?.status,
    message: res?.message,
    data: res.data,
  });
}
