import React, { createContext, useContext } from 'react'

import { useQueryClient, useQuery } from 'react-query'

const AuthProviderContext = createContext()

const AuthProvider = ({ bootstrap, onLogin, onLogout, children }) => {
  const queryClient = useQueryClient()

  const { data: me } = useQuery('auth', bootstrap)

  const updateAuth = (data) => queryClient.setQueryData('auth', data)

  const login = (data) => onLogin(data).then(updateAuth)
  const logout = () => onLogout().then(updateAuth)

  return <AuthProviderContext.Provider value={{ me, login, logout }}>{children}</AuthProviderContext.Provider>
}

const useAuthProvider = () => {
  const context = useContext(AuthProviderContext)

  if (context === undefined) {
    throw new Error('useAuthContext must be used within a [AuthProviderContext]')
  }

  return context
}

export { AuthProvider, useAuthProvider }
