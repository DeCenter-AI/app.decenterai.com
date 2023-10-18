import {PrismaClient} from '@prisma/client'
import * as argon from 'argon2'
import {AuthDto} from '../src/auth/dto'
import moment from 'moment'

const prisma = new PrismaClient()

async function create_user(dto: AuthDto) {
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

  const event = await prisma.event.create({
    data: {
      title: '20 Minute catchup',
      hostId: user1.id,
      duration: 20,
    },
  })
  console.log({ event })

  const startTime = moment('12:00', 'HH:mm')
  const endTime = startTime.clone().add(event.duration, 'minutes')

  console.log({ startTime, endTime })

  const timeSlot = await prisma.timeSlot.create({
    data: {
      eventId: event.id,
      available: true,
      startTime: startTime.toDate(),
      endTime: endTime.toDate(),
    },
  })

  console.log({ timeSlot })

  const today = new Date()
  const calendarInvite = await prisma.calendar.createMany({
    data: [
      {
        timeSlotId: timeSlot.id,
        date: new Date(today.getTime() + 1000 * 60 * 60 * 24),
        guestId: user2.id,
      },
      {
        timeSlotId: timeSlot.id,
        date: new Date(today.getTime() + 1000 * 60 * 60 * 24 * 2),
        guestId: user2.id,
      },
    ],
  })

  console.log({ calendarInvite })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
