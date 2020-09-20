import { ThunkAction } from 'redux-thunk'

export const GET_GAMES_STARTED = 'games/GET_GAMES_STARTED'
export const GET_GAMES_FINISHED = 'games/GET_GAMES_FINISHED'
export const GET_GAMES_FAILED = 'games/GET_GAMES_FAILED'

export interface IGame {
  name: string
  description: string
  code: string
  icon: string
  categoryIds: number[]
}

export interface IGetGamesStartedAction {
  type: typeof GET_GAMES_STARTED
}

export interface IGetGamesFinishedAction {
  type: typeof GET_GAMES_FINISHED
  payload: {
    games: IGame[]
  }
}

export interface IGetGamesFailedAction {
  type: typeof GET_GAMES_FAILED
  payload: {
    error: string
  }
}

export type AuthActionTypes =
  | IGetGamesStartedAction
  | IGetGamesFinishedAction
  | IGetGamesFailedAction

export type GamesState = Readonly<{
  isLoading: boolean // true while fetching games from api
  games: IGame[]
  error: string | null
}>

const initialState: GamesState = {
  isLoading: false,
  games: [],
  error: null,
}

const reducer = (
  prevState = initialState,
  action: AuthActionTypes
): GamesState => {
  switch (action.type) {
    case GET_GAMES_STARTED:
      return { ...initialState, isLoading: true }
    case GET_GAMES_FINISHED:
      return {
        ...prevState,
        games: action.payload.games,
        isLoading: false,
      }
    case GET_GAMES_FAILED:
      return { ...prevState, error: action.payload.error, isLoading: false }
    default:
      return prevState
  }
}

export default reducer
