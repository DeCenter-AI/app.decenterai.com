import { userType } from './global_types'
export async function create_user(user: userType) {
  const count = await check_user(user.email)
  if (Number(count) !== 0) {
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

async function check_user(email) {
  const res = await fetch('/api/prisma/user_exists', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ email: email }),
  })

  return res
}
