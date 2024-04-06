import { deleteAllMyMenu } from "@/lib/DBService/dbMenu";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  const user = req.headers.get("Authorization") || "";
  const res = await deleteAllMyMenu({ user });
  return NextResponse.json(res);
}
