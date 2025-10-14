import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // The main middleware function, which runs after the user is authenticated.
  function middleware(req) {
    const token = req.nextauth.token;
    const { pathname } = req.nextUrl;
    const isAdmin = token?.admin;

    if (isAdmin && pathname.startsWith('/profile')) {
      return NextResponse.redirect(new URL('/admin', req.url));
    }

    if (!isAdmin && pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/profile', req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = { matcher: ["/profile/:path*", "/admin/:path*",] };
