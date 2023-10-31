import {PrismaClient} from '@prisma/client'
import {IPFSProviders, LIGHTHOUSE} from '../enums/ipfsProviders'

const prisma = new PrismaClient()

async function create_user(dto) {
  const user = await prisma.user.create({
    data: {
      email: dto.email,
    },
  })
  console.log({ created: user })
  return user
}

function getCurrentDateInDDMMYYYYFormat() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so we add 1.
  const year = today.getFullYear();

  return `${day}-${month}-${year}`;
}

function addDays(date: Date, days: number): Date {
  date.setDate(date.getDate() + days)
  return date
}

async function main() {
  // await prisma.user.deleteMany()

  const hiro = {
    email: `hiro-${getCurrentDateInDDMMYYYYFormat()}@decenterai.com`,
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

  const modelInput = {
    cid: 'Qme1HnwLHVzRxra7mT5gRkG7WbyE4FhnGFn9inETSj33Hw',
    // @ts-ignore FIXME:
    provider: LIGHTHOUSE,
  }

  const tr1 = await prisma.trainingRequest.create({
    data: {
      userId: user1.id,
      // @ts-ignore FIXME:
      inputs: modelInput ,
      config: {
        trainScript:'linear-regression.ipynb',
        inputArchive: `/inputs/${modelInput.cid}`
      }
    },
  })
  console.log({ orderReq1: tr1 })

  const m1 = await prisma.model.create({
    data:{
      userId: user1.id,
      name: "Prisma Seed Model",
      description: "seeded by prisma",
      trainingRequestId: tr1.id,
      data: {
          cid: "QmTsdCTu3MNFQWWQS9oYrrH1gwYcVADFZXRUbzbcZjkSi7",
        // @ts-ignore
          provider: IPFSProviders.IPFS,
      },
    }
  })

  console.log({m1})

}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
