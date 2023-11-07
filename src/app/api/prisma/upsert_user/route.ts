import prisma from '@lib/prisma'

export type userType = {
  name: string
  email: string
  profileImage: string
  userName: string
}

export async function POST(req: Request) {
  const user: userType = await req.json()
  const created_user = await prisma.user.upsert({
    where: {
      email:user.email,
    },
    create: user,
    update: user,
  })
  return new Response(JSON.stringify({ status: 200 }))
}
