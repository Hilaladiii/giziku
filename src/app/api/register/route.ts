import { Register } from "@/lib/dbService";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const userData = await req.json();
  const response = await Register(userData);
  return NextResponse.json({
    status: response.status,
    message: response.message,
  });
}
