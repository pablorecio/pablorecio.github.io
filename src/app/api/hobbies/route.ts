import { NextResponse } from 'next/server'
import hobbiesData from '@/data/hobbies.json'

export async function GET() {
    try {
        return NextResponse.json(hobbiesData)
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch hobbies data' },
            { status: 500 }
        )
    }
}
