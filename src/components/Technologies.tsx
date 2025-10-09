'use client'

import technologiesData from '@/data/technologies.json'

interface Technology {
    name: string
    icon: string
}

export default function Technologies() {
    return (
        <section id="stack" className="py-24 bg-muted/50">
            <div className="container max-w-6xl mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono">
                        Technologies & Tools
                    </h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                    {technologiesData.map((tech: Technology, index: number) => (
                        <div
                            key={index}
                            className="tech-card flex flex-col items-center space-y-3 p-6 rounded-lg border bg-card text-card-foreground transition-all duration-300 cursor-pointer"
                        >
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                width={48}
                                height={48}
                                className="w-12 h-12 tech-icon"
                            />
                            <span className="text-sm font-medium text-center">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
