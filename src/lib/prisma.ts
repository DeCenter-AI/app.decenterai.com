import { PrismaClient } from '@prisma/client'
import { chalkStderr } from 'chalk'
const prismaClientSingleton = () => {
  return new PrismaClient({
    log: [
      {
        emit: 'event',
        level: 'query',
      },
      {
        emit: 'event',
        level: 'error',
      },
      {
        emit: 'event',
        level: 'info',
      },
      {
        emit: 'event',
        level: 'warn',
      },
    ],
  })
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined
}

const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

prisma.$on('query', (e) => {
  console.log(chalkStderr.bgGreen('Query: ') + e.query + '\n Time: '+ e.timestamp)
})

prisma.$on('error', (e) => {
  console.log(chalkStderr.red('Error: ') + e.message + '\n Time: ' + e.timestamp)
})

prisma.$on('info', (e) => {
  console.log(chalkStderr.cyan('Info: ') + e.message + '\n Time: ' + e.timestamp)
})

prisma.$on('warn', (e) => {
  console.log(chalkStderr.yellow('Warn: ') + e.message + '\n Time: ' + e.timestamp)
})
