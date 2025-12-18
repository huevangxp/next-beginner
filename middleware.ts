import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const user =
    request.cookies.get("user") ||
    request.headers.get("cookie")?.includes("user");
  const { pathname } = request.nextUrl;

  // If the user is not logged in and trying to access a protected route
  if (!user && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If the user is logged in and trying to access the login page
  if (user && pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
