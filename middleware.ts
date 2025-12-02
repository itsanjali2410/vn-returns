import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Cache Next.js static build files
  if (req.nextUrl.pathname.startsWith('/_next/static')) {
    res.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }

  return res;
}
