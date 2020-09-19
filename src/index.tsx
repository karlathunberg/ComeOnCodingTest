import * as React from 'react'
import { render } from 'react-dom'

import App from './components/app'
import './index.css'

const renderApp = () => render(<App />, document.getElementById('app'))

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept(renderApp)
}

renderApp()
