import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import {
  LOG_IN_STARTED,
  LOG_IN_FINISHED,
  LOG_IN_FAILED,
  LOG_OUT_STARTED,
  LOG_OUT_FINISHED,
  LOG_OUT_FAILED,
} from './reducer'
import { AppState } from '../root-reducer'
import history from '../../utils/history'
import * as Api from '../../utils/api'
import { set as setInLocalStorage, clear as clearLocalStorage } from './storage'

export const logIn = (
  username: string,
  password: string,
  returnUrl: string
): ThunkAction<void, AppState, null, Action<string>> => {
  return async (dispatch) => {
    dispatch({ type: LOG_IN_STARTED })
    const response = await Api.logIn(username, password)
    if (response.ok && response.parsedBody?.status === Api.ApiStatus.success) {
      const user = { username, ...response.parsedBody?.player }
      setInLocalStorage(user)

      dispatch({
        type: LOG_IN_FINISHED,
        payload: { user },
      })

      history.push(returnUrl || '/games')
    } else {
      dispatch({
        type: LOG_IN_FAILED,
        payload: { error: response.parsedBody?.error ?? response.statusText },
      })
    }
  }
}

export const logOut = (
  username: string
): ThunkAction<void, AppState, null, Action<string>> => {
  return async (dispatch) => {
    dispatch({ type: LOG_OUT_STARTED })
    const response = await Api.logOut(username)
    if (response.ok && response.parsedBody?.status === Api.ApiStatus.success) {
      clearLocalStorage()

      dispatch({
        type: LOG_OUT_FINISHED,
      })

      history.push('/login')
    } else {
      dispatch({
        type: LOG_OUT_FAILED,
        payload: { error: response.parsedBody?.error ?? response.statusText },
      })
    }
  }
}

export const selectAuthState = (state: AppState) => state.auth
export const selectAuthenticatedUser = (state: AppState) => state.auth.user!
