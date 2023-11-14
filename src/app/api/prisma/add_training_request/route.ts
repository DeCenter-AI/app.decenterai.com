import prisma from '@lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const TrainingRequest = await req.json()
    const new_training_request= await prisma.trainingRequest.create({
      data: TrainingRequest,
    })
    return NextResponse.json(new_training_request, { status: 200 })
  } catch (error) {
return NextResponse.json({ message: 'Error creating Training Request', error, status: 500 })
  }
}

export async function GET() {
  try {
    const trainingRequests = await prisma.trainingRequest.findMany()
    return NextResponse.json(trainingRequests, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Error getting Training Request' }, { status: 500 })
  }
}
