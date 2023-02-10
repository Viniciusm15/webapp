import { login } from '@/pages/api/requests/client'
import jwt from 'jwt-decode'

const AUTH_TOKEN_KEY = 'Auth_Token_key'

export const getToken = () => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(AUTH_TOKEN_KEY)
  }
}

export const setToken = (token) => {
  if (typeof window !== 'undefined') {
    return window.localStorage.setItem(AUTH_TOKEN_KEY, token)
  }
}

export const removeToken = () => {
  if (typeof window !== 'undefined') {
    return window.localStorage.removeItem(AUTH_TOKEN_KEY)
  }
}

export const bootstrap = async () => {
  const token = getToken()

  if (!token) {
    return Promise.resolve(null)
  }
}

export const handleLogin = async ({ email, password }) => {
  return login({ email, password }).then((data) => {
    const { token } = data

    if (token) {
      setToken(token)
    }

    return data
  })
}

export const handleLogout = () => {
  removeToken()

  return Promise.resolve(null)
}
