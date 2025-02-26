import * as React from 'react'
import { useSelector } from 'react-redux'
import {
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps,
  Router as RouterDom,
  Switch,
} from 'react-router-dom'

import history from '../../utils/history'
import LoginPage from '../login-page'
import GamesPage from '../games-page'
import GamePage from '../game-page'
import NotFoundPage from '../not-found-page'
import { selectAuthState } from '../../redux/auth'

interface IProps extends RouteProps {
  component?: React.ComponentType<RouteComponentProps>
}

const AuthenticatedRoute: React.FunctionComponent<IProps> = ({
  component: Component,
  children,
  ...rest
}) => {
  const { isAuthenticated, isLoading } = useSelector(selectAuthState)

  const handleRender = React.useCallback(
    (props) => {
      if (isLoading) {
        // In case render gets ahead of the log in flow
        return <div />
      } else if (!isAuthenticated) {
        // not logged in so redirect to login page
        return (
          <Redirect
            to={{
              pathname: '/login',
              state: { returnUrl: props.location.pathname },
            }}
          />
        )
      }

      return Component ? <Component {...props} /> : children
    },
    [Component, children, isLoading, isAuthenticated]
  )

  return <Route {...rest} render={handleRender} />
}

const RedirectRoot = () => {
  const { isAuthenticated } = useSelector(selectAuthState)
  if (isAuthenticated) {
    return <Redirect to="/games" />
  } else {
    return <Redirect to="login" />
  }
}

const Router = () => (
  <RouterDom history={history}>
    <Switch>
      <Route exact={true} path="/">
        <RedirectRoot />
      </Route>
      <Route exact={true} path="/login" component={LoginPage} />
      <AuthenticatedRoute exact={true} path="/games" component={GamesPage} />
      <AuthenticatedRoute
        exact={true}
        path="/games/:code"
        component={GamePage}
      />
      <Route path="/" component={NotFoundPage} />
    </Switch>
  </RouterDom>
)

export default Router
