import { ThunkAction } from 'redux-thunk'

export const LOG_IN_STARTED = 'auth/LOG_IN_STARTED'
export const LOG_IN_FINISHED = 'auth/LOG_IN_FINISHED'
export const LOG_IN_FAILED = 'auth/LOG_IN_FAILED'

export interface ILogInStartedAction {
  type: typeof LOG_IN_STARTED
}

export interface ILogInFinishedAction {
  type: typeof LOG_IN_FINISHED
  payload: {
    user: AuthenticatedUser
  }
}

export interface ILogInFailedAction {
  type: typeof LOG_IN_FAILED
  payload: {
    error: string
  }
}

export type AuthActionTypes =
  | ILogInStartedAction
  | ILogInFinishedAction
  | ILogInFailedAction

export interface AuthenticatedUser {
  name: string
  avatar: string
  event: string
}

export type AuthState = Readonly<{
  isAuthenticated: boolean
  isLoading: boolean // true while pending log in request
  user: AuthenticatedUser | null
  error: string | null
}>

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
  error: null,
}

const reducer = (
  prevState = initialState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case LOG_IN_STARTED:
      return { ...initialState, isLoading: true }
    case LOG_IN_FINISHED:
      return {
        ...prevState,
        isAuthenticated: true,
        user: action.payload.user,
        isLoading: false,
      }
    case LOG_IN_FAILED:
      return { ...prevState, error: action.payload.error, isLoading: false }
    default:
      return prevState
  }
}

export default reducer
