'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'experience', 'stack', 'hobbies', 'contact']
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
        { id: 'stack', label: 'Stack' },
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
                                className={`nav-link transition-colors hover:text-primary ${activeSection === item.id ? 'active text-primary' : 'text-muted-foreground'
                                    }`}
                                onClick={() => scrollToSection(item.id)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <button
                        className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
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
                                    ? 'text-primary bg-primary/10'
                                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
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
