'use client'
import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  // Define any functions or values you want to provide
  const value = {
    user,
    setUser,
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
// Export the context
export const useUserContext = () => useContext(AppContext)
