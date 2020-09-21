import { API_URL } from './variables'

const API_LOG_IN_URL = `${API_URL}/login`
const API_LOG_OUT_URL = `${API_URL}/logout`
const API_GAMES_URL = `${API_URL}/games`
const API_CATEGORIES_URL = `${API_URL}/categories`

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

export interface ILogInResponseBody {
  status: ApiStatus
  player: IApiPlayer
  error: string
}

export async function logIn(username: string, password: string) {
  const response: ApiResponse<ILogInResponseBody> = await fetch(
    API_LOG_IN_URL,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }
  )

  try {
    response.parsedBody = await response.json()
  } catch (ex) {
    // this should never happen for a user
    throw new Error(`Could not parse body of api request ${API_LOG_IN_URL}`)
  }

  return response
}

export interface ILogOutResponseBody {
  status: ApiStatus
  error: string
}

export async function logOut(username: string) {
  const response: ApiResponse<ILogOutResponseBody> = await fetch(
    API_LOG_OUT_URL,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    }
  )

  try {
    response.parsedBody = await response.json()
  } catch (ex) {
    // this should never happen for a user
    throw new Error(`Could not parse body of api request ${API_LOG_OUT_URL}`)
  }

  return response
}

interface IGamesResponseBodyItem {
  name: string
  description: string
  code: string
  icon: string
  categoryIds: number[]
}

interface IGamesResponseBody extends Array<IGamesResponseBodyItem> {}

export async function getGames() {
  const response: ApiResponse<IGamesResponseBody> = await fetch(API_GAMES_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  try {
    response.parsedBody = await response.json()
  } catch (ex) {
    // this should never happen for a user
    throw new Error(`Could not parse body of api request ${API_GAMES_URL}`)
  }

  return response
}

interface ICategoriesResponseBodyItem {
  id: number
  name: string
}

interface ICategoriesResponseBody extends Array<ICategoriesResponseBodyItem> {}

export async function getCategories() {
  const response: ApiResponse<ICategoriesResponseBody> = await fetch(
    API_CATEGORIES_URL,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  try {
    response.parsedBody = await response.json()
  } catch (ex) {
    // this should never happen for a user
    throw new Error(`Could not parse body of api request ${API_CATEGORIES_URL}`)
  }

  return response
}
