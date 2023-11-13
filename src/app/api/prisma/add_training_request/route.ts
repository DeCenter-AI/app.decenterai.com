import prisma from '@lib/prisma'
import { NextResponse } from 'next/server'
export async function POST(req: Request) {
  try {
    const newTrainingRequest = await req.json()
    const create_request = await prisma.trainingRequest.create({
      data: newTrainingRequest,
    })
    NextResponse.json({ status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: 'Error creating training request', error, status: 500 })
  }
}
export async function GET(req: Request) {
  try {
    const trainingRequests = await prisma.trainingRequest.findMany()
    return NextResponse.json(trainingRequests, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Error getting models' }, { status: 500 })
  }
}