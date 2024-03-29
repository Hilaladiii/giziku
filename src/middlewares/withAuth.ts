import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";
import { getToken } from "next-auth/jwt";
import { isTokenExpired } from "@/lib/utils";

export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = []
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;
    if (requireAuth.includes(pathname)) {
      const token = await getToken({
        req,
        secret: process.env.NEXT_AUTH_SECRET,
      });
      if (!token) {
        const url = new URL("/login", req.url);
        url.searchParams.set("callbacks", encodeURI(req.url));
        return NextResponse.redirect(url);
      }
      console.log(token);
      const isExpired = isTokenExpired(Number(token?.exp));
      if (isExpired) {
        const url = new URL("/login", req.url);
        url.searchParams.set("callbacks", encodeURI(req.url));
        return NextResponse.redirect(url);
      }
      console.log(token);
    }
    return middleware(req, next);
  };
}
