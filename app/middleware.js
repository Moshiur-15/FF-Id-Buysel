import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = request.nextUrl;

  // Not logged in → redirect to login
  if (!token && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/Auth/Login", request.url));
  }

  // Logged in → trying to access login page → redirect to home
  if (token && pathname.startsWith("/Auth/Login")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Non-admin trying to access dashboard → logout and redirect
  if (pathname.startsWith("/dashboard") && token?.role !== "admin") {
    const response = NextResponse.redirect(new URL("/Auth/Login", request.url));

    // Clear the authentication cookies (NextAuth uses these by default)
    response.cookies.set("next-auth.session-token", "", { maxAge: 0 });
    response.cookies.set("next-auth.callback-url", "", { maxAge: 0 });
    response.cookies.set("__Secure-next-auth.session-token", "", { maxAge: 0 });
    response.cookies.set("__Secure-next-auth.callback-url", "", { maxAge: 0 });

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/Auth/Login"],
};
