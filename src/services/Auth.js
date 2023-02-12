import jwt from 'jwt-decode'
import { login } from '@/pages/api/requests/client'

const AUTH_TOKEN_KEY = 'Auth_Token_key'

export const getToken = () => {
  if (typeof window !== 'undefined') {
    const token = window.localStorage.getItem(AUTH_TOKEN_KEY)

    if (token) {
      const tokenExpiration = jwt(token).exp

      if (Date.now() >= tokenExpiration * 1000) {
        removeToken()
      }
    }

    return token
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
