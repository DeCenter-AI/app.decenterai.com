import prisma from '@lib/prisma'

export async function POST(req: Request) {
  try {
    const newModel = await req.json()
    const create_model = await prisma.model.create({
      data: newModel,
    })
    return new Response(JSON.stringify({ status: 200 }))
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Error creating training request', error, status: 500 }),
    )
  }
}
