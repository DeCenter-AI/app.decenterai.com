import { userType } from '@app/api/prisma/upsert_user/route'
import axios from 'axios'

export async function upsert_user(user: userType) {
  const res = await axios.put('/api/prisma/upsert_user', user)
  console.debug({ upsert_user: res })
  return res
}
