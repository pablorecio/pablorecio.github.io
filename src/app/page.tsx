'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Hobbies from '@/components/Hobbies'
import Contact from '@/components/Contact'

export default function Home() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <Experience />
            <Skills />
            <Hobbies />
            <Contact />
        </main>
    )
}
