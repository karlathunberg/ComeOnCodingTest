import * as React from 'react'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { logIn, selectAuthState } from '../../redux/auth'
import LoginPageView from './view'
import { useFormatMessage } from '../../localization'

interface LocationState {
  returnUrl: string
}

const LoginPageContainer = () => {
  const dispatch = useDispatch()
  const location = useLocation<LocationState>()
  const returnUrl = location.state?.returnUrl
  const { isAuthenticated, isLoading, error } = useSelector(selectAuthState)

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleUsernameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value),
    [setUsername]
  )

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
    [setPassword]
  )

  const handleLogInClick = useCallback(
    (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      event.preventDefault()
      return dispatch(logIn(username, password, returnUrl))
    },
    [dispatch, username, password, returnUrl]
  )

  const logInIsDisabled = isAuthenticated || isLoading

  const [t] = useFormatMessage()
  const texts = {
    username: t('LOG_IN_PAGE_USERNAME'),
    password: t('LOG_IN_PAGE_PASSWORD'),
    logIn: t('LOG_IN_PAGE_LOG_IN'),
  }

  return (
    <LoginPageView
      onUsernameChange={handleUsernameChange}
      onPasswordChange={handlePasswordChange}
      onLogInClick={handleLogInClick}
      logInIsDisabled={logInIsDisabled}
      error={error}
      texts={texts}
    />
  )
}

export default LoginPageContainer
