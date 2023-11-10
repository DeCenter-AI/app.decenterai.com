import axios from 'axios'
import { userType } from '@api/prisma/upsert_user/route'

export async function create_user(user: userType) {
  const res = await get_user(user.email)
  const currUser = await res.data.user
  if (currUser) {
    console.log('User already exists in db')
    return
  }
  await fetch('/api/prisma/add_user', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  })
}

export async function get_user(email) {
  const res = await axios.post('/api/prisma/user_exists', {
    email,
  })

  return res
}
