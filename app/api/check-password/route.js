import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const password = searchParams.get('password')
  const correctPassword = process.env.ACCESS_PASSWORD

  if (password === correctPassword) {
    const response = NextResponse.json({ message: 'Password correct' })
    response.cookies.set('auth', JSON.stringify({ timestamp: Date.now() }), {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60,
    })
    return response
  } else {
    return NextResponse.json({ message: 'Incorrect password' }, { status: 401 })
  }
}