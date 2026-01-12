import { NextResponse } from 'next/server'
import { get } from '@vercel/edge-config'

export async function middleware(request) {
  const isInMaintenanceMode = await get('maintenance')

  if (isInMaintenanceMode) {
    return NextResponse.rewrite(
      new URL('/maintenance', request.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|maintenance).*)',
  ],
}
