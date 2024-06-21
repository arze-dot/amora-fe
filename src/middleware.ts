import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const cookies = request.cookies.get('token')?.value

    console.log(cookies)

    if (cookies && !request.nextUrl.pathname.startsWith('/admin')) {
        return Response.redirect(new URL('/admin', request.url))
    }

    if (!cookies && !request.nextUrl.pathname.startsWith('/login')) {
        return Response.redirect(new URL('/login', request.url))
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}