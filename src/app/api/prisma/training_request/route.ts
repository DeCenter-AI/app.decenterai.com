import prisma from '@lib/prisma'

export async function POST(req: Request) {
    const  trainingRequest  = await req.json()
  const create_request = await prisma.trainingRequest.create({
    data: trainingRequest,
  })
  return new Response(JSON.stringify({ status: 200 }))
}
