import * as React from 'react'
import { Provider } from 'react-redux'
import { Redirect, Route, Router as RouterDom, Switch } from 'react-router-dom'

import { LocalizationProvider } from '../../localization'
import configureStore from '../../redux/configure-store'
import history from '../../utils/history'
import LoginPage from '../login-page'
import GamesPage from '../games-page'
import GamePage from '../game-page'
import NotFoundPage from '../not-found-page'

const store = configureStore()

const AppContent = () => (
  <RouterDom history={history}>
    <Switch>
      <Route exact={true} path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact={true} path="/login" component={LoginPage} />
      <Route exact={true} path="/games" component={GamesPage} />
      <Route exact={true} path="/game" component={GamePage} />
      <Route path="/" component={NotFoundPage} />
    </Switch>
  </RouterDom>
)

const App = () => (
  <LocalizationProvider>
    <Provider store={store}>
      <AppContent />
    </Provider>
  </LocalizationProvider>
)

export default App
