import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { upsert_user } from '@app/explore/upsert_user'
import { User } from '@prisma/client'

// interface IUser{
//     id: string
//     particleUUID: string | null
//     userName: string
//     email: string | null
//     name: string
//     profileImage: string
//
//     userDB: User
// }

type IUser = Omit<Omit<User, 'createdAt'>, 'updatedAt'>

type Store = {
  user: IUser | null
  init: (user: IUser) => void
  setUser: (user: IUser) => void
}

const useUserStore = create<Store>()(
  devtools(
    persist(
      (set) => ({
        user: null,

        init(userData: IUser) {
          set((state) => ({
            ...state,
            user: userData,
          }))
          console.log('userStore: init')
        },
        // TODO: setUser implement in profile/EditProfile
        async setUser(userData: IUser) {
          set((state) => ({
            ...state,
            user: userData,
          }))
          console.log('userStore: setUser')
          await upsert_user(userData)
        },
      }),
      {
        name: 'userData',
      },
    ),
  ),
)

export default useUserStore
