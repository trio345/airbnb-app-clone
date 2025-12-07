export { default } from 'next-auth/middleware';

export const proxy = {
    matcher: [
        "/trips",
        "/reservations",
        "/properties",
        "/favorites"
    ]
}