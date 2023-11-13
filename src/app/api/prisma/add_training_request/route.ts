import prisma from '@lib/prisma'

export async function POST(req: Request) {
  try {
    const newTrainingRequest = await req.json()
    const create_request = await prisma.trainingRequest.create({
      data: newTrainingRequest,
    })
    return new Response(JSON.stringify({ status: 200 }))
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Error creating training request', error, status: 500 }),
    )
  }
}
