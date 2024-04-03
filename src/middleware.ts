import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middlewares/withAuth";

export function mainMiddleware(req: NextRequest) {
  return NextResponse.next();
}

export default withAuth(mainMiddleware, [
  "/add-new-menu",
  "/list-menu",
  "/my-menu",
  "/result",
  "/add-all-data",
]);
