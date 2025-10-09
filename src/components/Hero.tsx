'use client'

export default function Hero() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <section id="home" className="gradient-bg text-primary-foreground">
            <div className="container max-w-6xl mx-auto px-4 py-24 md:py-32">
                <div className="flex flex-col items-center text-center space-y-8 animate-in">
                    <div className="rounded-full bg-primary-foreground/10 p-1 backdrop-blur-sm border border-primary-foreground/20">
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
                        <h1 className="caret text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white font-mono">
                            Pablo Recio
                        </h1>
                        <p className="mx-auto max-w-[700px] text-xl md:text-2xl" style={{ color: '#DBEAFE' }}>
                            Staff Software Engineer
                        </p>
                        <p className="mx-auto max-w-[600px] md:text-lg" style={{ color: '#E5E7EB' }}>
                            Hey, I'm a software engineer based in Jerez de la Frontera, with 15 years of experience.
                            My background is backend-heavy with Python, plus extensive data engineering expertise.
                            I'm very product-minded, focusing on building solutions that deliver real business value,
                            without forgetting software engineering best practices.
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
