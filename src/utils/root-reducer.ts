import { combineReducers } from 'redux'

const dummyReducer = (state = 0) => state

const rootReducer = combineReducers({ dummyReducer })

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
