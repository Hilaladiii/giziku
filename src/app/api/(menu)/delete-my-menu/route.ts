import { deleteMyMenu } from "@/lib/DBService/dbMenu";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const id = params.get("id") || "";

  const res = await deleteMyMenu({ id });
  return NextResponse.json(res);
}
