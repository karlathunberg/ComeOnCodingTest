import { combineReducers } from 'redux'

import AuthReducer from './auth/reducer'
import { GamesReducer } from '../components/games-page'

const rootReducer = combineReducers({
  auth: AuthReducer,
  games: GamesReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
