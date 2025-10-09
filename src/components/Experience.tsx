'use client'

import { useState, useEffect } from 'react'
import type { MouseEvent as ReactMouseEvent, KeyboardEvent as ReactKeyboardEvent } from 'react'
import { ChevronDown, ExternalLink } from 'lucide-react'
import { api } from '@/services/api'

interface Position {
    title: string
    period: string
    technologies: string[]
    achievements: string[]
}

interface ExperienceItem {
    id: string
    company: string
    website: string
    logo: string
    location: string
    period: string
    positions: Position[]
}

export default function Experience() {
    const [experienceData, setExperienceData] = useState<ExperienceItem[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [openCard, setOpenCard] = useState<number | null>(0) // First card open by default

    useEffect(() => {
        const fetchExperienceData = async () => {
            try {
                const data = await api.getExperience()
                setExperienceData(data)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred')
            } finally {
                setLoading(false)
            }
        }

        fetchExperienceData()
    }, [])

    useEffect(() => {
        // Load last opened card from localStorage
        const lastOpenCard = localStorage.getItem('experience-open-card')
        if (lastOpenCard !== null) {
            setOpenCard(parseInt(lastOpenCard))
        }
    }, [])

    const handleCardToggle = (index: number) => {
        if (openCard === index) {
            setOpenCard(null)
            localStorage.setItem('experience-open-card', '-1')
        } else {
            setOpenCard(index)
            localStorage.setItem('experience-open-card', index.toString())
        }
    }

    const handleCardClick = (e: ReactMouseEvent<HTMLDivElement>, index: number) => {
        const target = e.target as HTMLElement
        // Ignore clicks on links or buttons inside the card so they work normally
        if (target.closest('a') || target.closest('button')) return
        handleCardToggle(index)
    }

    const handleCardKeyDown = (e: ReactMouseEvent<HTMLDivElement> | ReactKeyboardEvent<HTMLDivElement>, index: number) => {
        // Keyboard accessibility: toggle on Enter or Space when the card is focused
        if ('key' in e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleCardToggle(index)
            }
        }
    }

    if (loading) {
        return (
            <section id="experience" className="py-24 bg-background">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="flex flex-col items-center text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono">
                            Professional Experience
                        </h2>
                    </div>
                    <div className="flex justify-center">
                        <div className="text-muted-foreground">Loading...</div>
                    </div>
                </div>
            </section>
        )
    }

    if (error) {
        return (
            <section id="experience" className="py-24 bg-background">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="flex flex-col items-center text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono">
                            Professional Experience
                        </h2>
                    </div>
                    <div className="flex justify-center">
                        <div className="text-red-500">Error: {error}</div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id="experience" className="py-24 bg-background">
            <div className="container max-w-6xl mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono">
                        Professional Experience
                    </h2>
                </div>

                <div className="space-y-8">
                    {experienceData.map((experience: ExperienceItem, index: number) => (
                        <div
                            key={experience.id}
                            className="experience-card rounded-lg border bg-card text-card-foreground shadow-sm p-6"
                            onClick={(e) => handleCardClick(e, index)}
                            onKeyDown={(e) => handleCardKeyDown(e, index)}
                            role="button"
                            tabIndex={0}
                        >
                            <div className="flex sm:grid sm:grid-cols-12 items-center">
                                <div className="flex-1 sm:col-span-9 flex items-center gap-4">
                                    <img
                                        src={experience.logo}
                                        alt={experience.company}
                                        width={32}
                                        height={32}
                                        className="company-logo"
                                    />
                                    <h3 className="text-2xl font-semibold leading-none tracking-tight">
                                        {experience.company}
                                        <span className="hidden sm:inline"> -{' '}
                                            <a
                                                href={experience.website}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1"
                                            >
                                                {experience.website.replace('https://', '')}
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        </span>
                                    </h3>
                                </div>
                                <div className="sm:col-span-3 flex items-center justify-between">
                                    <div className={`work-badge ${experience.location.toLowerCase()} hidden sm:block`}>
                                        {experience.location}
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="inline-flex items-center px-2 py-1 text-sm font-semibold text-muted-foreground hidden sm:block">
                                            {experience.period}
                                        </div>
                                        <button
                                            onClick={() => handleCardToggle(index)}
                                            className="experience-toggle text-accent font-size-1rem transition-none cursor-pointer flex-shrink-0"
                                        >
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform ${openCard === index ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {openCard === index && (
                                <div className="experience-content open">
                                    {/* Mobile-only company website link and location pill */}
                                    <div className="sm:hidden mb-4 flex items-center justify-between">
                                        <a
                                            href={experience.website}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1 text-base"
                                        >
                                            {experience.website.replace('https://', '')}
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                        <div className={`work-badge ${experience.location.toLowerCase()}`}>
                                            {experience.location}
                                        </div>
                                    </div>
                                    <div className="space-y-6 mt-6">
                                        {experience.positions.map((position, posIndex) => (
                                            <div key={posIndex} className="border-l-2 border-accent pl-4">
                                                <h4 className="text-lg font-semibold text-accent">{position.title}</h4>
                                                <p className="text-sm text-muted-foreground mb-3">
                                                    {position.period}
                                                </p>
                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    {position.technologies.map((tech, techIndex) => (
                                                        <div
                                                            key={techIndex}
                                                            className="badge inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold"
                                                        >
                                                            {tech}
                                                        </div>
                                                    ))}
                                                </div>
                                                <ul className="space-y-2 text-muted-foreground">
                                                    {position.achievements.map((achievement, achIndex) => (
                                                        <li key={achIndex} className="flex items-start gap-2">
                                                            <span className="bullet">•</span>
                                                            {achievement}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
