'use client'

import { useState, useEffect } from 'react'
import { api } from '@/services/api'
import { Dumbbell, ChefHat, Gamepad2, Camera, Library, HandMetal } from 'lucide-react'

interface Hobby {
    name: string
}

// Mapping hobby names to Lucide icons
const getHobbyIcon = (hobbyName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
        'Crossfit': Dumbbell,
        'Cooking': ChefHat,
        'Videogames': Gamepad2,
        'Photography': Camera,
        'Fantasy & Sci-Fi': Library,
        'Rock & Metal': HandMetal,
    }

    return iconMap[hobbyName] || Library // Default fallback icon
}

export default function Hobbies() {
    const [hobbiesData, setHobbiesData] = useState<Hobby[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchHobbiesData = async () => {
            try {
                const data = await api.getHobbies()
                setHobbiesData(data)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred')
            } finally {
                setLoading(false)
            }
        }

        fetchHobbiesData()
    }, [])

    if (loading) {
        return (
            <section id="hobbies" className="py-24 bg-background">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="flex flex-col items-center text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono">
                            Hobbies & Interests
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
            <section id="hobbies" className="py-24 bg-background">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="flex flex-col items-center text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono">
                            Hobbies & Interests
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
        <section id="hobbies" className="py-24 bg-background">
            <div className="container max-w-6xl mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono">
                        Hobbies & Interests
                    </h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                    {hobbiesData.map((hobby: Hobby, index: number) => {
                        const IconComponent = getHobbyIcon(hobby.name)
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center space-y-3 p-6 rounded-lg border bg-card text-card-foreground hobby-card"
                            >
                                <div className="text-4xl">
                                    <IconComponent className="w-10 h-10 text-accent" />
                                </div>
                                <span className="text-sm font-medium text-center text-accent">{hobby.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
