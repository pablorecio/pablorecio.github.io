'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        if (typeof window === 'undefined') return 'dark'
        return (localStorage.getItem('theme') as 'light' | 'dark') || 'dark'
    })

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'experience', 'skills', 'hobbies', 'contact']
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Apply theme class to <html> and persist
    useEffect(() => {
        if (typeof document === 'undefined') return
        const root = document.documentElement
        if (theme === 'dark') {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
        try {
            localStorage.setItem('theme', theme)
        } catch { /* ignore */ }
    }, [theme])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        setIsMenuOpen(false)
    }

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'hobbies', label: 'Hobbies' },
        { id: 'contact', label: 'Contact' },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center max-w-6xl mx-auto px-4">
                <div className="mr-4 flex">
                    <button
                        className="mr-6 flex items-center space-x-2"
                        onClick={() => scrollToSection('home')}
                    >
                        <span className="nav-title font-bold text-xl font-mono">Pablo Recio</span>
                    </button>
                    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                className={`nav-link transition-colors hover:text-accent ${activeSection === item.id ? 'active text-accent' : 'text-muted-foreground'
                                    }`}
                                onClick={() => scrollToSection(item.id)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-2">
                    <button
                        className="inline-flex items-center justify-center rounded-md h-9 w-9 border border-border hover:bg-accent/10 transition-colors"
                        type="button"
                        aria-label="Toggle theme"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </button>
                    <button
                        className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                        type="button"
                        aria-label="Open menu"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t bg-background/95 backdrop-blur">
                    <nav className="container max-w-6xl mx-auto px-4 py-4 space-y-2">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === item.id
                                    ? 'text-accent bg-accent/10'
                                    : 'text-muted-foreground hover:text-accent hover:bg-accent/5'
                                    }`}
                                onClick={() => scrollToSection(item.id)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    )
}
