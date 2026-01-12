import { NextRequest, NextResponse } from 'next/server';

// Enable maintenance mode by setting this to true
const MAINTENANCE_MODE = false;

export function middleware(request: NextRequest) {
  // Check if maintenance mode is enabled
  if (MAINTENANCE_MODE) {
    // Allow the maintenance page to be accessed
    if (request.nextUrl.pathname === '/maintenance') {
      return NextResponse.next();
    }
    
    // Redirect all other requests to maintenance page
    return NextResponse.rewrite(new URL('/maintenance', request.url));
  }

  return NextResponse.next();
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - assets (public assets)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|assets).*)',
  ],
};
