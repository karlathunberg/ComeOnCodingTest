import { ThunkAction } from 'redux-thunk'

export const LOG_IN_STARTED = 'auth/LOG_IN_STARTED'
export const LOG_IN_FINISHED = 'auth/LOG_IN_FINISHED'
export const LOG_IN_FAILED = 'auth/LOG_IN_FAILED'

export const LOG_OUT_STARTED = 'auth/LOG_OUT_STARTED'
export const LOG_OUT_FINISHED = 'auth/LOG_OUT_FINISHED'
export const LOG_OUT_FAILED = 'auth/LOG_OUT_FAILED'

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

export interface ILogOutStartedAction {
  type: typeof LOG_OUT_STARTED
}

export interface ILogOutFinishedAction {
  type: typeof LOG_OUT_FINISHED
}

export interface ILogOutFailedAction {
  type: typeof LOG_OUT_FAILED
  payload: {
    error: string
  }
}

export type AuthActionTypes =
  | ILogInStartedAction
  | ILogInFinishedAction
  | ILogInFailedAction
  | ILogOutStartedAction
  | ILogOutFinishedAction
  | ILogOutFailedAction

export interface AuthenticatedUser {
  username: string
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
      return { ...initialState, isLoading: true, error: null }
    case LOG_IN_FINISHED:
      return {
        ...prevState,
        isAuthenticated: true,
        user: action.payload.user,
        isLoading: false,
        error: null,
      }
    case LOG_IN_FAILED:
      return { ...prevState, error: action.payload.error, isLoading: false }
    case LOG_OUT_STARTED:
      return { ...prevState, isLoading: true, error: null }
    case LOG_OUT_FINISHED:
      return {
        ...prevState,
        isAuthenticated: false,
        user: null,
        isLoading: false,
        error: null,
      }
    case LOG_OUT_FAILED:
      return { ...prevState, error: action.payload.error, isLoading: false }
    default:
      return prevState
  }
}

export default reducer
