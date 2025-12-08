
import withAuth from 'next-auth/middleware';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server';
export { withAuth } from 'next-auth/middleware';


export default withAuth(
    function middleware(req: NextRequest) {
        return NextResponse.next();
    },
    {
        pages: {
            signIn: '/'
        }
    }
)

export const config = {
    matcher: [
        "/trips",
        "/reservations",
        "/properties",
        "/favorites"
    ],
}