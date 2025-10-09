'use client'

import { useState, useEffect } from 'react'
import { api } from '@/services/api'
import ContactForm from './ContactForm'

interface SocialItem {
    name: string
    icon: string
    url: string
    label: string
}

interface ContactData {
    email: string
    location: string
    locationUrl: string
    linkedin: string
    github: string
    social: SocialItem[]
}

export default function Contact() {
    const [contactData, setContactData] = useState<ContactData | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchContactData = async () => {
            try {
                const data = await api.getContact()
                setContactData(data)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred')
            } finally {
                setLoading(false)
            }
        }

        fetchContactData()
    }, [])

    if (loading) {
        return (
            <section id="contact" className="py-24 bg-background">
                <div className="container max-w-4xl mx-auto px-4">
                    <div className="flex flex-col items-center text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono">
                            Contact Information
                        </h2>
                    </div>
                    <div className="flex justify-center">
                        <div className="text-muted-foreground">Loading...</div>
                    </div>
                </div>
            </section>
        )
    }

    if (error || !contactData) {
        return (
            <section id="contact" className="py-24 bg-background">
                <div className="container max-w-4xl mx-auto px-4">
                    <div className="flex flex-col items-center text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono">
                            Contact Information
                        </h2>
                    </div>
                    <div className="flex justify-center">
                        <div className="text-red-500">Error: {error || 'Failed to load contact data'}</div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id="contact" className="py-24 bg-background">
            <div className="container max-w-6xl mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono">
                        Contact Information
                    </h2>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Information - Left Side */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 font-mono">Get in touch</h3>
                            <p className="text-muted-foreground mb-8">
                                I'm always open to hear about new opportunities, interesting projects,
                                or just having a chat about technology, software engineering or dogs.
                            </p>
                        </div>
                        <div className="grid gap-6">
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
                                        <p className="text-muted-foreground">
                                            <a
                                                href={item.url}
                                                target={item.url.startsWith('http') ? '_blank' : undefined}
                                                rel={item.url.startsWith('http') ? 'noreferrer' : undefined}
                                                className="hover:text-accent transition-colors"
                                            >
                                                {item.label}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form - Right Side */}
                    <div className="flex justify-center lg:justify-end">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}
