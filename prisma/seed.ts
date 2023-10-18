import {PrismaClient} from '@prisma/client'
import * as argon from 'argon2'

const prisma = new PrismaClient()

async function create_user(dto) {
  const hash = await argon.hash(dto.password)
  const user = await prisma.user.create({
    data: {
      email: dto.email,
      hash: hash,
    },
  })
  console.log({ created: user })
  return user
}

function addDays(date: Date, days: number): Date {
  date.setDate(date.getDate() + days)
  return date
}

async function main() {
  await prisma.user.deleteMany()

  const user1 = await create_user({
    email: 'dean@nas.edu',
    password: 'dean@Testing#',
  })
  const user2 = await create_user({
    email: 'hiro@student.nas.edu',
    password: 'hiro@Testing#',
  })

}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
