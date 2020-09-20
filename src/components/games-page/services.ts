import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import {
  GET_GAMES_STARTED,
  GET_GAMES_FINISHED,
  GET_GAMES_FAILED,
  GET_CATEGORIES_STARTED,
  GET_CATEGORIES_FINISHED,
  GET_CATEGORIES_FAILED,
  SELECT_CATEGORY,
} from './reducer'
import { AppState } from '../../redux/root-reducer'
import history from '../../utils/history'
import * as Api from '../../utils/api'

export const getGames = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => {
  return async (dispatch) => {
    dispatch({ type: GET_GAMES_STARTED })
    const response = await Api.getGames()
    if (response.ok) {
      dispatch({
        type: GET_GAMES_FINISHED,
        payload: { games: response.parsedBody },
      })
    } else {
      dispatch({
        type: GET_GAMES_FAILED,
        payload: { error: response.statusText },
      })
    }
  }
}

export const getCategories = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => {
  return async (dispatch) => {
    dispatch({ type: GET_CATEGORIES_STARTED })
    const response = await Api.getCategories()
    if (response.ok) {
      dispatch({
        type: GET_CATEGORIES_FINISHED,
        payload: { categories: response.parsedBody },
      })
    } else {
      dispatch({
        type: GET_CATEGORIES_FAILED,
        payload: { error: response.statusText },
      })
    }
  }
}

export const selectCategory = (categoryId: number) => ({
  type: SELECT_CATEGORY,
  payload: { categoryId },
})

export const selectGamesState = (state: AppState) => state.games
