import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './root-reducer'

export default function configureStore() {
  const middleWareEnhancer = applyMiddleware(thunkMiddleware)

  const win = window as any

  if (!win.store) {
    win.store = createStore(
      rootReducer,
      composeWithDevTools(middleWareEnhancer)
    )
  } else {
    win.store.replaceReducer(rootReducer)
  }

  return win.store
}
