import { combineReducers } from 'redux'

import AuthReducer from './auth/reducer'

const rootReducer = combineReducers({
  auth: AuthReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
