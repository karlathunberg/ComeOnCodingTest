import * as React from 'react'
import { Provider } from 'react-redux'

import { LocalizationProvider, useFormatMessage } from '../../localization'
import configureStore from '../../utils/configure-store'

const store = configureStore()

const AppContent = () => {
  const f = useFormatMessage()
  return <h2>{f('TITLE')}</h2>
}

const App = () => (
  <LocalizationProvider>
    <Provider store={store}>
      <AppContent />
    </Provider>
  </LocalizationProvider>
)

export default App
