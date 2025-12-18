import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const user = request.cookies.get("user");
  const { pathname } = request.nextUrl;

  // Handle old locale paths (e.g., /en/..., /lo/...)
  const localePattern = /^\/(en|lo)(\/|$)/;
  if (localePattern.test(pathname)) {
    const newPathname = pathname.replace(localePattern, "/");
    return NextResponse.redirect(new URL(newPathname, request.url));
  }

  const publicRoutes = ["/login", "/register"];
  const isPublicRoute = publicRoutes.includes(pathname);

  // If the user is not logged in and trying to access a protected route
  if (!user && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If the user is logged in and trying to access a public route (login/register)
  if (user && isPublicRoute) {
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
