'use client'

import { useEffect, useState } from 'react'
import type { MouseEvent as ReactMouseEvent, KeyboardEvent as ReactKeyboardEvent } from 'react'
import { ChevronDown, Users, UserCheck, UserPlus } from 'lucide-react'
import { api } from '@/services/api'

interface SkillItem {
    name: string
    icon?: string
}

interface SkillSection {
    title: string
    description?: string
    items: SkillItem[]
}

// Map leadership skills to Lucide React icons
const getLeadershipIcon = (skillName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
        'Team leadership': Users,
        'Mentoring': UserCheck,
        'Hiring': UserPlus
    }

    return iconMap[skillName]
}

export default function Skills() {
    const [skillsData, setSkillsData] = useState<SkillSection[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [openCard, setOpenCard] = useState<number | null>(0)

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const data = await api.getSkills()
                setSkillsData(data)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred')
            } finally {
                setLoading(false)
            }
        }
        fetchSkills()
    }, [])

    useEffect(() => {
        const lastOpenCard = localStorage.getItem('skills-open-card')
        if (lastOpenCard !== null) {
            setOpenCard(parseInt(lastOpenCard))
        }
    }, [])

    const handleCardToggle = (index: number) => {
        if (openCard === index) {
            setOpenCard(null)
            localStorage.setItem('skills-open-card', '-1')
        } else {
            setOpenCard(index)
            localStorage.setItem('skills-open-card', index.toString())
        }
    }

    const handleCardClick = (e: ReactMouseEvent<HTMLDivElement>, index: number) => {
        const target = e.target as HTMLElement
        if (target.closest('a') || target.closest('button')) return
        handleCardToggle(index)
    }

    const handleCardKeyDown = (e: ReactMouseEvent<HTMLDivElement> | ReactKeyboardEvent<HTMLDivElement>, index: number) => {
        if ('key' in e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleCardToggle(index)
            }
        }
    }

    if (loading) {
        return (
            <section id="skills" className="py-24 bg-muted/50">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="flex flex-col items-center text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono">
                            Skills
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
            <section id="skills" className="py-24 bg-muted/50">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="flex flex-col items-center text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono">
                            Skills
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
        <section id="skills" className="py-24 bg-muted/50">
            <div className="container max-w-6xl mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono">
                        Skills
                    </h2>
                </div>
                <div className="space-y-8">
                    {skillsData.map((section, index) => (
                        <div
                            key={section.title}
                            className="experience-card rounded-lg border bg-card text-card-foreground shadow-sm p-6"
                            onClick={(e) => handleCardClick(e, index)}
                            onKeyDown={(e) => handleCardKeyDown(e, index)}
                            role="button"
                            tabIndex={0}
                        >
                            <div className="grid grid-cols-12 items-center">
                                <div className="col-span-7 sm:col-span-9 flex items-center gap-4">
                                    <h3 className="text-2xl font-semibold leading-none tracking-tight">
                                        {section.title}
                                    </h3>
                                </div>
                                <div className="col-span-5 sm:col-span-3 flex items-center justify-end">
                                    <button
                                        onClick={() => handleCardToggle(index)}
                                        className="experience-toggle text-accent font-size-1rem transition-none cursor-pointer flex-shrink-0"
                                    >
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform ${openCard === index ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                </div>
                            </div>

                            {openCard === index && (
                                <div className="experience-content open">
                                    <div className="mt-4 text-muted-foreground">
                                        {section.description}
                                    </div>
                                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-6">
                                        {section.items.map((item) => {
                                            const LeadershipIcon = getLeadershipIcon(item.name)
                                            return (
                                                <div
                                                    key={item.name}
                                                    className="flex flex-col items-center space-y-3 p-6 rounded-lg border bg-card text-card-foreground"
                                                >
                                                    {LeadershipIcon ? (
                                                        <LeadershipIcon className="w-12 h-12 text-accent" />
                                                    ) : item.icon ? (
                                                        <img
                                                            src={item.icon}
                                                            alt={item.name}
                                                            width={48}
                                                            height={48}
                                                            className="w-12 h-12 tech-icon-accent"
                                                        />
                                                    ) : null}
                                                    <span className="text-sm font-medium text-center text-accent">{item.name}</span>
                                                </div>
                                            )
                                        })}
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


