import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middlewares/withAuth";
import { getToken } from "next-auth/jwt";

export async function mainMiddleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXT_AUTH_SECRET });
  const pathname = req.nextUrl.pathname;
  if (token && ["/login", "/register"].includes(pathname)) {
    return NextResponse.redirect(new URL("/list-menu", req.url));
  }
  return NextResponse.next();
}

export default withAuth(mainMiddleware, [
  "/add-new-menu",
  "/list-menu",
  "/my-menu",
  "/result",
  "/add-all-data",
]);
