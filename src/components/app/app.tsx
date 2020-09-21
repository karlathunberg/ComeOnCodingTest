import * as React from 'react'
import { Provider, useSelector } from 'react-redux'

import { LocalizationProvider } from '../../localization'
import configureStore from '../../redux/configure-store'
import Router from './router'

const store = configureStore()

const App = () => (
  <LocalizationProvider>
    <Provider store={store}>
      <Router />
    </Provider>
  </LocalizationProvider>
)

export default App
