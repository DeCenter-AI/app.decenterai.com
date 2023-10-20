import {PrismaClient} from '@prisma/client'
import * as argon from 'argon2'
import {LIGHTHOUSE} from '../enums/ipfsProviders'

const prisma = new PrismaClient()

async function create_user(dto) {
  const hash = await argon.hash(dto.password)
  const user = await prisma.user.create({
    data: {
      email: dto.email,
      password: hash,
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
  // await prisma.user.deleteMany()

  const hiro = {
    email: 'hiro@decenterai.com',
    password: 'hiro@1234',
  }
  const deleteHiro = await prisma.user.findFirst({
    where: {
      email: hiro.email,
    },
  })
  if (deleteHiro) {
    console.log({ msg: `deleting user ${deleteHiro.id}` })
    await prisma.user.delete({
      where: {
        email: hiro.email,
      },
    })
  }
  const user1 = await create_user(hiro)

  const inputDataset = {
    cid: 'Qme1HnwLHVzRxra7mT5gRkG7WbyE4FhnGFn9inETSj33Hw',
    provider: LIGHTHOUSE,
  }

  const inputArchive = await prisma.dataStore.upsert({
    create: inputDataset,
    update: inputDataset,
    where: {
      cid: inputDataset.cid,
    },
  })

  console.log({ inputArchive })

  const orderReq1 = await prisma.trainingRequest.create({
    data: {
      userId: user1.id,
      cid: inputDataset.cid,
    },
  })

  console.log({ orderReq1 })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
