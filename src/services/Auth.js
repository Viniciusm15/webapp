import { login } from '../pages/api/requests/login'

const AUTH_TOKEN_KEY = 'Auth_token_key'

export const getToken = () => {
  return window.localStorage.getItem(AUTH_TOKEN_KEY)
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

  return Promise.resolve(null)
}
