import { NextResponse, type NextRequest } from 'next/server';
export function middleware(req:NextRequest){const p=req.nextUrl.pathname;if((p.startsWith('/dashboard')||p.startsWith('/reflection')||p.startsWith('/settings'))&&!req.cookies.get('sb-access-token')) return NextResponse.redirect(new URL('/login',req.url));return NextResponse.next()}
export const config={matcher:['/dashboard/:path*','/reflection/:path*','/settings/:path*']};
