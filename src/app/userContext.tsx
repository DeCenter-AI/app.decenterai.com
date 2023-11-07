'use client'
import React, {createContext, ReactNode, useContext, useState} from 'react'
import {userType} from "@/app/api/prisma/add_user/route";


const default_user_values = {
  email: null,
  name: null,
  profileImage: null,
  userName: null,
}

type Props = {
  children: ReactNode
}

type contextType = {
  user: userType
  setUser: React.Dispatch<React.SetStateAction<userType>>
}

const AppContext = createContext<contextType>({
  user: default_user_values,
  setUser: () => {},
})

export function ContextProvider({ children }: Props) {
  const [user, setUser] = useState<userType>(default_user_values)
  const value = { user, setUser }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
// Export the context
export const useUserContext = () => useContext(AppContext)
