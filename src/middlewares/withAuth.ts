import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";
import { getToken } from "next-auth/jwt";

const onlyAdmin = ["/add-all-data"];
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
      if (token?.name !== "hilal123" && onlyAdmin.includes(pathname)) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }

    return middleware(req, next);
  };
}
