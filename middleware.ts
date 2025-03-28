import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
}

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Define public routes that don't require authentication
  const publicRoutes = [
    '/',
    '/login',
    '/register',
    '/about',
    '/contact',
    '/features',
    '/pricing',
    '/auth/callback',
    '/forgot-password',
    '/reset-password',
  ]

  // Define auth routes that should redirect to dashboard if logged in
  const authRoutes = ['/login', '/register']

  // Check if the current path is a public route
  const isPublicRoute = publicRoutes.some(route => 
    req.nextUrl.pathname === route || 
    req.nextUrl.pathname.startsWith('/auth/') ||
    req.nextUrl.pathname.startsWith('/reset-password')
  )

  // If user is not signed in and trying to access a protected route
  if (!session && !isPublicRoute) {
    const redirectUrl = new URL('/login', req.url)
    redirectUrl.searchParams.set('redirectTo', req.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // If user is signed in and trying to access auth routes (login/register only)
  if (session && authRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return res
} 