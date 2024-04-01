import { getMenusUser } from "@/lib/DBService/dbMenu";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const user = req.headers.get("Authorization");
  console.log(user);
  if (!user) {
    return NextResponse.json({ status: 401, message: "Unauthorized" });
  }
  const res = await getMenusUser({ name: user });
  console.log(res);
  return NextResponse.json(res);
}
