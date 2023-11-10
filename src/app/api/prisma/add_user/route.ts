import prisma from '@lib/prisma'
import { userType } from '@api/prisma/upsert_user/route'

export async function POST(req: Request) {
  const user: userType = await req.json()
  const created_user = await prisma.user.create({
    data: user,
  })
  return new Response(JSON.stringify({ status: 200 }))
}
