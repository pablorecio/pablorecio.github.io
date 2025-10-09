'use client'

import { Github } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="py-8 bg-background border-t border-border">
            <div className="container max-w-6xl mx-auto px-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <div>
                        © {new Date().getFullYear()} Pablo Recio. All rights reserved.
                    </div>
                    <a
                        href="https://github.com/pablorecio/pablorecio.github.io"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                        <Github className="w-4 h-4" />
                        View source code
                    </a>
                </div>
            </div>
        </footer>
    )
}
