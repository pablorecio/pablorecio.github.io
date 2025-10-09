import { NextResponse } from 'next/server'
import technologiesData from '@/data/technologies.json'

export async function GET() {
    try {
        return NextResponse.json(technologiesData)
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch technologies data' },
            { status: 500 }
        )
    }
}
