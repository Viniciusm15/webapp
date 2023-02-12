import { getToken } from '@/services/Auth'

export function handleAuthenticationToRedirectUrl(router, url) {
    const token = getToken()
    token ? router.push(url) : router.push('/')
}
