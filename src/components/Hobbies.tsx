'use client'

import hobbiesData from '@/data/hobbies.json'

interface Hobby {
    name: string
    emoji: string
}

export default function Hobbies() {
    return (
        <section id="hobbies" className="py-24 bg-background">
            <div className="container max-w-6xl mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono">
                        Hobbies & Interests
                    </h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                    {hobbiesData.map((hobby: Hobby, index: number) => (
                        <div
                            key={index}
                            className="hobby-card flex flex-col items-center space-y-3 p-6 rounded-lg border bg-card text-card-foreground transition-all duration-300 cursor-pointer"
                        >
                            <div className="text-4xl">{hobby.emoji}</div>
                            <span className="text-sm font-medium text-center">{hobby.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
