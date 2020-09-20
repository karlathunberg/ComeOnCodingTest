import { ThunkAction } from 'redux-thunk'

export const GET_GAMES_STARTED = 'games/GET_GAMES_STARTED'
export const GET_GAMES_FINISHED = 'games/GET_GAMES_FINISHED'
export const GET_GAMES_FAILED = 'games/GET_GAMES_FAILED'
export const GET_CATEGORIES_STARTED = 'games/GET_CATEGORIES_STARTED'
export const GET_CATEGORIES_FINISHED = 'games/GET_CATEGORIES_FINISHED'
export const GET_CATEGORIES_FAILED = 'games/GET_CATEGORIES_FAILED'
export const SELECT_CATEGORY = 'games/SELECT_CATEGORY'

export interface IGame {
  name: string
  description: string
  code: string
  icon: string
  categoryIds: number[]
}

export interface ICategory {
  id: number
  name: string
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

export interface IGetCategoriesStartedAction {
  type: typeof GET_CATEGORIES_STARTED
}

export interface IGetCategoriesFinishedAction {
  type: typeof GET_CATEGORIES_FINISHED
  payload: {
    categories: ICategory[]
  }
}

export interface IGetCategoriesFailedAction {
  type: typeof GET_CATEGORIES_FAILED
  payload: {
    error: string
  }
}

export interface ISelectCategoryAction {
  type: typeof SELECT_CATEGORY
  payload: {
    categoryId: number
  }
}

export type AuthActionTypes =
  | IGetGamesStartedAction
  | IGetGamesFinishedAction
  | IGetGamesFailedAction
  | IGetCategoriesStartedAction
  | IGetCategoriesFinishedAction
  | IGetCategoriesFailedAction
  | ISelectCategoryAction

export type GamesPageState = Readonly<{
  isLoadingGames: boolean
  games: IGame[]
  loadingGamesError: string | null
  isLoadingCategories: boolean
  categories: ICategory[]
  loadingCategoriesError: string | null
  selectedCategoryId: number | null
}>

const initialState: GamesPageState = {
  isLoadingGames: false,
  games: [],
  loadingGamesError: null,
  isLoadingCategories: false,
  categories: [],
  loadingCategoriesError: null,
  selectedCategoryId: null,
}

const reducer = (
  prevState = initialState,
  action: AuthActionTypes
): GamesPageState => {
  switch (action.type) {
    case GET_GAMES_STARTED:
      return { ...initialState, isLoadingGames: true }
    case GET_GAMES_FINISHED:
      return {
        ...prevState,
        games: action.payload.games,
        isLoadingGames: false,
      }
    case GET_GAMES_FAILED:
      return {
        ...prevState,
        loadingGamesError: action.payload.error,
        isLoadingGames: false,
      }
    case GET_CATEGORIES_STARTED:
      return { ...initialState, isLoadingCategories: true }
    case GET_CATEGORIES_FINISHED:
      return {
        ...prevState,
        categories: action.payload.categories,
        isLoadingCategories: false,
      }
    case GET_CATEGORIES_FAILED:
      return {
        ...prevState,
        loadingCategoriesError: action.payload.error,
        isLoadingCategories: false,
      }
    case SELECT_CATEGORY:
      return {
        ...prevState,
        selectedCategoryId: action.payload.categoryId,
      }
    default:
      return prevState
  }
}

export default reducer
