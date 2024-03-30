import { signUp } from "@/lib/DBService/dbUser";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const userData = await req.json();
  const res = await signUp(userData);
  return NextResponse.json(res);
}
