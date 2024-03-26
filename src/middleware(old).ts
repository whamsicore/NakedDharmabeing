import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  console.log('Middleware triggered for URL:', request.nextUrl.pathname, 'with request method:', request.method);
  return NextResponse.next();

  // const sessionToken = request.cookies.get('sessionToken');
  
  // if (request.nextUrl.pathname.startsWith('/portal/login') && sessionToken) {
  //   console.log('Redirecting from /login to / because sessionToken exists');
  //   return NextResponse.redirect(new URL('/', request.url));
  // }
  
  // if (request.nextUrl.pathname.startsWith('/dashboard')) {
  //   console.log('Rewriting /dashboard to /dashboard/user');
  //   return NextResponse.rewrite(new URL('/dashboard/user', request.url));
  // }
}
// See "Matching Paths" below to learn more
export const config = {
  // matcher: ['/portal/login', '/dashboard/:path*'],
}
