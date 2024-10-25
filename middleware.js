import { NextResponse } from 'next/server'

export function middleware(request) {
  const password = process.env.ACCESS_PASSWORD
  const oneWeek = 7 * 24 * 60 * 60 * 1000 // One week in milliseconds

  // Don't apply middleware to the password page itself
  if (request.nextUrl.pathname === '/password') {
    return NextResponse.next()
  }

  // Check if the user has already entered the correct password
  const authCookie = request.cookies.get('auth')
  if (authCookie) {
    const { timestamp } = JSON.parse(authCookie.value)
    if (Date.now() - timestamp < oneWeek) {
      return NextResponse.next()
    }
  }

  // If no valid auth cookie, check for password in the request
  const requestPassword = request.nextUrl.searchParams.get('password')
  if (requestPassword === password) {
    const response = NextResponse.next()
    response.cookies.set('auth', JSON.stringify({ timestamp: Date.now() }), {
      httpOnly: true,
      maxAge: oneWeek,
    })
    return response
  }

  // If no valid password, redirect to password page
  return NextResponse.redirect(new URL('/password', request.url))
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}