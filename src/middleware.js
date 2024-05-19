import { NextResponse } from "next/server";

export function middleware(request) {
  const adminToken = request.cookies.get(
    process.env.NEXT_PUBLIC_ADMIN_SECRET
  )?.value;

  const pathname = new URL(request.url).pathname;

  // Protect all non-public routes (excluding "/login")
  if (!adminToken && pathname.startsWith("/users/dashboard")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Redirect authenticated users to dashboard from "/" and "/create-account"
  if (adminToken && (pathname === "/" || pathname === "/create-account")) {
    return NextResponse.redirect(new URL("/users/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
