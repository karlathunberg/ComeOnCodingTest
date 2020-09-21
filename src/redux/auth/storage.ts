import { AuthenticatedUser } from './reducer'

const AUTH_STORAGE_KEY = '__COME_ON_AUTH__'

export function isAuthenticated() {
  return localStorage.getItem(AUTH_STORAGE_KEY) !== null
}

export function set(user: AuthenticatedUser) {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user))
}

export function clear() {
  localStorage.removeItem(AUTH_STORAGE_KEY)
}

export function get(): AuthenticatedUser | null {
  const userAsString = localStorage.getItem(AUTH_STORAGE_KEY)
  return userAsString && JSON.parse(userAsString)
}
