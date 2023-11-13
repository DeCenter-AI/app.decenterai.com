import {create} from 'zustand'
import {devtools, persist} from 'zustand/middleware'
import {upsert_user} from '@app/explore/upsert_user'
import {User} from '@prisma/client'

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
  setUser: (user: Partial<IUser>) => void
  clearUser: () => void
}

const useUserStore = create<Store>()(
  devtools(
    persist(
      (set, get) => ({
        user: null,

        init(userData: IUser) {
          set((state) => ({
            ...state,
            user: userData,
          }))
          console.log('userStore: init')
        },
        async setUser(userDto: Partial<IUser>, syncDB: boolean = true) {
          //TODO: make this false, too much DB writes!!
          set((state) => ({
            ...state,
            user: {
              ...state.user,
              ...userDto,
            },
          }))
          console.log('userStore: setUser')
          if (syncDB) {
            console.log('userStore: syncDB')
            await upsert_user(this.user)
          }
        },
        clearUser() {
          set({ user: null })
        },
        async syncDB() {
          console.log('userStore: syncDB')
          await upsert_user(this.user)
        },
        /*   async setName(name:string){
            await this.setUser({
                name,
                id:"1",
                particleUUID:null, userName:null, email:null, profileImage:null
            })
         }*/
      }),
      {
        name: 'userData',
      },
    ),
  ),
)

export default useUserStore
