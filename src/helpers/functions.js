import { getToken } from '@/services/Auth'

export function handleAuthentionToRedirectUrl(router, url) {
    const token = getToken()
    token ? router.push(url) : router.push('/')
}
