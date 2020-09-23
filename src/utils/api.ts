import { API_URL } from './variables'

const API_LOGIN_URL = `${API_URL}/login`

interface ApiResponse<T> extends Response {
  parsedBody?: T
}

export enum ApiStatus {
  success = 'success',
  fail = 'fail',
}

export interface IApiPlayer {
  name: string
  avatar: string
  event: string
}

export interface ILoginResponseBody {
  status: ApiStatus
  player: IApiPlayer
  error: string
}

export async function logIn(username: string, password: string) {
  const response: ApiResponse<ILoginResponseBody> = await fetch(API_LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })

  try {
    response.parsedBody = await response.json()
  } catch (ex) {
    // this should never happen for a user
    throw new Error(`Could not parse body of api request ${API_LOGIN_URL}`)
  }

  return response
}
