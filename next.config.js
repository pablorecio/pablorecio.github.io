/** @type {import('next').NextConfig} */
const nextConfig = {
    // Remove static export to support API routes in production
    // output: 'export', // Commented out to enable API routes
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    async headers() {
        const securityHeaders = [
            { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
            { key: 'X-Frame-Options', value: 'DENY' },
            { key: 'X-Content-Type-Options', value: 'nosniff' },
            { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
            { key: 'Permissions-Policy', value: "geolocation=(), microphone=(), camera=(), payment=(), fullscreen=*" },
            { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
            { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
            { key: 'Content-Security-Policy', value: "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.tailwindcss.com https://*.i.posthog.com; style-src 'self' 'unsafe-inline'; font-src 'self' data:; connect-src 'self' https://*.posthog.com https://*.i.posthog.com; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" }
        ]

        return [
            {
                source: '/:path*',
                headers: securityHeaders,
            }
        ]
    }
}

module.exports = nextConfig
