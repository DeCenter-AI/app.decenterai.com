import prisma from '@/lib/prisma'
export async function POST(req: Request) {
  const { email } = await req.json()
  // const counter = await prisma.user.count({
  //   where: {
  //     email: email,
  //   },
  // })

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })
  console.log(user)

  return new Response(JSON.stringify({ user }))
}
