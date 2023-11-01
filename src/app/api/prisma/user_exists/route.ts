import prisma from '@/lib/prisma'
export async function POST(req: Request) {
  const { email } = await req.json()
  const exists = await prisma.user.count({
    where: {
      email: email,
    },
  })
  return Response.json(exists)
}
