import prisma from '@lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const newModel = await req.json()
    const create_model = await prisma.model.create({
      data: newModel,
    })
    return NextResponse.json(create_model, { status: 200 })
  } catch (error) {
return NextResponse.json({ message: 'Error creating model', error, status: 500 })
  }
}

export async function GET() {
  try {
   
   const models = await prisma.model.findMany()
    return NextResponse.json(models,{status: 200})
  } catch (error) {
    return NextResponse.json({ message: 'Error getting models' }, { status: 500 })
  }
}


