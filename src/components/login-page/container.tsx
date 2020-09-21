import * as React from 'react'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { logIn, selectAuthState } from '../../redux/auth'
import logoImg from '../../images/logo.svg'
import LoginPageView from './view'

const LoginPageContainer = () => {
  const dispatch = useDispatch()
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

  const handleLogInClick = useCallback(() => {
    return dispatch(logIn(username, password))
  }, [dispatch, username, password])

  const logInIsDisabled = isAuthenticated || isLoading

  return (
    <LoginPageView
      onUsernameChange={handleUsernameChange}
      onPasswordChange={handlePasswordChange}
      onLogInClick={handleLogInClick}
      logInIsDisabled={logInIsDisabled}
      error={error}
    />
  )
}

export default LoginPageContainer
