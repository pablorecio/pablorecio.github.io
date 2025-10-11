'use client'

import React, { useEffect, useState } from 'react'
import { Users, UserCheck, UserPlus, Code, Server, Database, Palette } from 'lucide-react'
import { api } from '@/services/api'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'

interface SkillItem {
    name: string
    icon?: string
}

interface SkillSection {
    title: string
    description?: string
    items: SkillItem[]
}

// Map skill categories to Lucide React icons
const getCategoryIcon = (categoryTitle: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
        'Backend': Code,
        'Infrastructure': Server,
        'Data & Product Analytics': Database,
        'Frontend': Palette,
        'Leadership & Mentoring': Users
    }

    return iconMap[categoryTitle]
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

                {/* Simple Skills Grid */}
                <TooltipProvider>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skillsData.map((section, index) => {
                            const CategoryIcon = getCategoryIcon(section.title)

                            return (
                                <div
                                    key={section.title}
                                    className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-md transition-shadow flex flex-col"
                                >
                                    {/* Category Header */}
                                    <div className="flex items-center gap-3 mb-4">
                                        {CategoryIcon && (
                                            <CategoryIcon className="w-6 h-6 text-accent" />
                                        )}
                                        <h3 className="text-xl font-semibold leading-none tracking-tight">
                                            {section.title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    {section.description && (
                                        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                                            {section.description}
                                        </p>
                                    )}

                                    {/* Skills Grid */}
                                    <div className="grid grid-cols-4 gap-2 mt-auto">
                                        {section.items.map((item) => {
                                            const LeadershipIcon = getLeadershipIcon(item.name)
                                            return (
                                                <Tooltip key={item.name} delayDuration={200}>
                                                    <TooltipTrigger asChild>
                                                        <button className="flex items-center justify-center p-2 rounded-lg border bg-background/50 hover:bg-background/80 transition-colors cursor-pointer min-h-[40px] w-full">
                                                            {LeadershipIcon ? (
                                                                <LeadershipIcon className="w-4 h-4 text-accent" />
                                                            ) : item.icon ? (
                                                                <img
                                                                    src={item.icon}
                                                                    alt={item.name}
                                                                    width={16}
                                                                    height={16}
                                                                    className="w-4 h-4 tech-icon-accent"
                                                                />
                                                            ) : null}
                                                        </button>
                                                    </TooltipTrigger>
                                                    <TooltipContent side="top" className="z-50">
                                                        <p className="text-sm font-medium">{item.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </TooltipProvider>
            </div>
        </section>
    )
}


