import prisma from '@lib/prisma'

export type userType = {
  name: string
  email: string
  profileImage: string
  userName: string
  particleUUID: string
}

export async function PUT(req: Request) {
  const user: userType = await req.json()
  const created_user = await prisma.user.upsert({
    where: {
      email: user.email,
    },
    create: {
      ...user,
      id: undefined,
    },
    update: {
      ...user,
      //@ts-ignore
      id: undefined,
    },
  })
  return new Response(JSON.stringify({ status: 200, created_user }))
}
