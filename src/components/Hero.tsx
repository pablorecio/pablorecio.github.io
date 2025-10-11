'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
    const [displayedName, setDisplayedName] = useState('')
    const [isTyping, setIsTyping] = useState(true)
    const fullName = 'Pablo Recio'

    useEffect(() => {
        // Small delay before starting the typing animation
        const startDelay = setTimeout(() => {
            let currentIndex = 0
            const typingInterval = setInterval(() => {
                if (currentIndex < fullName.length) {
                    setDisplayedName(fullName.slice(0, currentIndex + 1))
                    currentIndex++
                } else {
                    setIsTyping(false)
                    clearInterval(typingInterval)
                }
            }, 120) // Adjust speed here (lower = faster)

            return () => clearInterval(typingInterval)
        }, 500) // 500ms delay before starting

        return () => {
            clearTimeout(startDelay)
        }
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <section id="home" className="gradient-bg">
            <div className="container max-w-6xl mx-auto px-4 py-24 md:py-32">
                <div className="flex flex-col items-center text-center space-y-8 animate-in">
                    <div className="rounded-full bg-secondary/20 p-1 backdrop-blur-sm border border-border">
                        <div className="avatar-border">
                            <img
                                src="/avatar.jpg"
                                srcSet="/avatar.jpg, /avatar@2x.jpg 2x, /avatar@3x.jpg 3x"
                                alt="Portrait of Pablo Recio"
                                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover avatar-bw"
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h1 className="caret text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary dark:text-white font-mono">
                            {displayedName}
                        </h1>
                        <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-foreground/80">
                            <strong className="text-accent">Staff Software Engineer</strong>
                        </p>
                        <p className="mx-auto max-w-[600px] md:text-lg text-foreground/70">
                            Hi there! I'm a software engineer based in Andalusia with over <strong className="text-accent">15 years</strong> of experience in <strong className="text-accent">backend</strong> development, <strong className="text-accent">data engineering</strong> and a bit of <strong className="text-accent">frontend</strong> sprinkled on top. I'm passionate about building products that make a <strong className="text-accent">real impact</strong>: practical, thoughtful, and always focused on delivering real value.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <button
                            onClick={() => scrollToSection('experience')}
                            className="btn-primary inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-8"
                        >
                            View Experience
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn-secondary inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-8"
                        >
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
