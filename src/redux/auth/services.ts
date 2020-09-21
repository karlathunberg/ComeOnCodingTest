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

export const logIn = (
  username: string,
  password: string
): ThunkAction<void, AppState, null, Action<string>> => {
  return async (dispatch) => {
    dispatch({ type: LOG_IN_STARTED })
    const response = await Api.logIn(username, password)
    if (response.ok && response.parsedBody?.status === Api.ApiStatus.success) {
      dispatch({
        type: LOG_IN_FINISHED,
        payload: { user: { username, ...response.parsedBody?.player } },
      })

      history.push('/games')
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
