import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import PostHogProvider from '@/components/PostHogProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Pablo Recio - Staff Software Engineer | Python, Data Engineering, Backend Development',
    description: 'Staff Software Engineer with 15 years of experience in Python, data engineering, and backend development. Based in Andalusia, Spain. Expert in Python, dbt, Snowflake, Kafka, AWS, PostgreSQL, and modern web technologies.',
    keywords: 'staff software engineer, python developer, data engineering, backend development, python, dbt, snowflake, kafka, aws, postgresql, docker, kubernetes, terraform, golang, typescript, nextjs, pablo recio, spain, remote work, senior developer',
    authors: [{ name: 'Pablo Recio' }],
    openGraph: {
        title: 'Pablo Recio - Staff Software Engineer',
        description: 'Staff Software Engineer with 15 years of experience in Python, data engineering, and backend development.',
        type: 'website',
        locale: 'en_US',
        url: 'https://pablo.recio.me',
        siteName: 'Pablo Recio',
        images: [
            {
                url: 'https://pablo.recio.me/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Pablo Recio - Staff Software Engineer'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Pablo Recio - Staff Software Engineer',
        description: 'Staff Software Engineer with 15 years of experience in Python, data engineering, and backend development.',
        images: ['https://pablo.recio.me/og-image.png']
    },
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1.0,
    themeColor: '#0E1116',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/apple-touch-icon-57x57.png" />
                <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/apple-touch-icon-114x114.png" />
                <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/apple-touch-icon-72x72.png" />
                <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/apple-touch-icon-144x144.png" />
                <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/apple-touch-icon-120x120.png" />
                <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/apple-touch-icon-152x152.png" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="apple-touch-icon" href="/favicon.svg" />
                <meta name="application-name" content="pablo.recio.me" />
                <meta name="theme-color" content="#0E1116" />
                <meta name="msapplication-TileColor" content="#98dded" />
                <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
                {/* Prevent theme flash: read localStorage before React hydration */}
                <script dangerouslySetInnerHTML={{
                    __html: `
                    try {
                      const t = localStorage.getItem('theme') || 'dark';
                      if (t === 'dark') document.documentElement.classList.add('dark');
                      else document.documentElement.classList.remove('dark');
                    } catch {}
                `}} />
            </head>
            <body className={`${inter.className} min-h-screen bg-background font-sans antialiased`}>
                <PostHogProvider />
                {children}
            </body>
        </html>
    )
}
