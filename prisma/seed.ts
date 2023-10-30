import {PrismaClient} from '@prisma/client'
import {LIGHTHOUSE} from '@enums/ipfsProviders'

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

  const tr1 = await prisma.trainingRequest.create({
    data: {
      userId: user1.id,
      inputs: {
        cid: 'Qme1HnwLHVzRxra7mT5gRkG7WbyE4FhnGFn9inETSj33Hw',
        // @ts-ignore FIXME:
        provider: LIGHTHOUSE,
      }
    },
  })
  console.log({ orderReq1: tr1 })

}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
