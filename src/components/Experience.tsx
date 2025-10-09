'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, ExternalLink } from 'lucide-react'
import experienceData from '@/data/experience.json'

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
    const [openCard, setOpenCard] = useState<number | null>(0) // First card open by default

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
                        >
                            <div className="grid grid-cols-12 items-center">
                                <div className="col-span-9 flex items-center gap-4">
                                    <img
                                        src={experience.logo}
                                        alt={experience.company}
                                        width={32}
                                        height={32}
                                        className="company-logo"
                                    />
                                    <h3 className="text-2xl font-semibold leading-none tracking-tight">
                                        {experience.company} -{' '}
                                        <a
                                            href={experience.website}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                                        >
                                            {experience.website.replace('https://', '')}
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </h3>
                                </div>
                                <div className="col-span-3 flex items-center justify-between">
                                    <div className={`work-badge ${experience.location.toLowerCase()}`}>
                                        {experience.location}
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="inline-flex items-center px-2 py-1 text-sm font-semibold text-muted-foreground">
                                            {experience.period}
                                        </div>
                                        <button
                                            onClick={() => handleCardToggle(index)}
                                            className="experience-toggle text-primary font-size-1rem transition-none cursor-pointer flex-shrink-0"
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
                                    <div className="space-y-6 mt-6">
                                        {experience.positions.map((position, posIndex) => (
                                            <div key={posIndex} className="border-l-2 border-primary pl-4">
                                                <h4 className="text-lg font-semibold text-primary">{position.title}</h4>
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
