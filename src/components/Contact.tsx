'use client'

import contactData from '@/data/contact.json'

interface SocialItem {
    name: string
    icon: string
    url: string
    label: string
}

export default function Contact() {

    return (
        <section id="contact" className="py-24 bg-background">
            <div className="container max-w-4xl mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono">
                        Contact Information
                    </h2>
                </div>
                <div className="flex justify-center">
                    <div className="space-y-8 max-w-2xl">
                        <div className="grid gap-6 sm:grid-cols-2">
                            {contactData.social.map((item: SocialItem, index: number) => (
                                <div key={index} className="flex items-center space-x-4">
                                    <img
                                        src={item.icon}
                                        alt={item.name}
                                        width={32}
                                        height={32}
                                        className={`w-8 h-8 ${item.name === 'GitHub' ? 'github-icon' : 'contact-icon'
                                            }`}
                                    />
                                    <div>
                                        <p className="font-semibold text-foreground/80">{item.name}</p>
                                        <p className="text-foreground/80">
                                            <a
                                                href={item.url}
                                                target={item.url.startsWith('http') ? '_blank' : undefined}
                                                rel={item.url.startsWith('http') ? 'noreferrer' : undefined}
                                                className="hover:text-primary transition-colors"
                                            >
                                                {item.label}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
