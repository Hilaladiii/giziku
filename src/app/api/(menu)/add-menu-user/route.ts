import { addMenuUser } from "@/lib/DBService/dbMenu";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const dataMenuUser = await req.json();
  const res = await addMenuUser(dataMenuUser.menu, dataMenuUser.berat);
  return NextResponse.json(res);
}
