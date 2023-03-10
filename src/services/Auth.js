import jwt from 'jwt-decode'
import { login } from '@/pages/api/requests/client'

const AUTH_TOKEN_KEY = 'Auth_Token_key'

export const getToken = () => {
  const token = window.localStorage.getItem(AUTH_TOKEN_KEY)

  if (token) {
    const tokenExpiration = jwt(token).exp

    if (Date.now() >= tokenExpiration * 1000) {
      removeToken()
    }
  }

  return token
}

export const setToken = (token) => {
  return window.localStorage.setItem(AUTH_TOKEN_KEY, token)
}

export const removeToken = () => {
  return window.localStorage.removeItem(AUTH_TOKEN_KEY)
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
  window.location.href = '/';

  return Promise.resolve(null)
}
