import { NextResponse } from 'next/server'
import { get } from '@vercel/edge-config'

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

export async function middleware(request) {
  try {
    const isInMaintenanceMode = await get('maintenance')

    if (isInMaintenanceMode) {
      request.nextUrl.pathname = `/maintenance`
      return NextResponse.rewrite(request.nextUrl)
    }
  } catch (error) {
    // If Edge Config is not available, continue normally
    console.error('Edge Config error:', error)
  }

  return NextResponse.next()
}
