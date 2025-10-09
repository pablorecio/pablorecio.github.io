// API service functions that always try API routes first, then fall back to static data
import contactData from '@/data/contact.json'
import experienceData from '@/data/experience.json'
import hobbiesData from '@/data/hobbies.json'
import technologiesData from '@/data/technologies.json'
import skillsData from '@/data/skills.json'

// Generic fetch function that tries API routes first, then falls back to static data
async function fetchData<T>(endpoint: string, fallbackData: T): Promise<T> {
    try {
        const response = await fetch(`/api${endpoint}`)
        if (response.ok) {
            return await response.json()
        }
    } catch (error) {
        console.warn(`API route ${endpoint} not available, falling back to static data`)
    }

    // Fallback to static data if API route fails
    return fallbackData
}

export const api = {
    async getContact() {
        return fetchData('/contact', contactData)
    },

    async getExperience() {
        return fetchData('/experience', experienceData)
    },

    async getHobbies() {
        return fetchData('/hobbies', hobbiesData)
    },

    async getTechnologies() {
        return fetchData('/technologies', technologiesData)
    },

    async getSkills() {
        return fetchData('/skills', skillsData)
    }
}
