import * as React from 'react'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { logIn, selectAuthState } from '../../redux/auth'
import logoImg from '../../images/logo.svg'

const LoginPage = () => {
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

  const disableLogIn = isAuthenticated || isLoading

  return (
    <div>
      <div className="ui one column center aligned page grid">
        <div className="column twelve wide">
          <img src={logoImg} alt="logo" />
        </div>
      </div>
      <div className="main container">
        <div className="login">
          <div className="ui grid centered">
            <div className="ui one column stackable center aligned page grid">
              <div className="column twelve wide">
                {error && (
                  <div className="ui compact error message">
                    Could not log in: {error}
                  </div>
                )}
                <form>
                  <div className="fields">
                    <div className="required field">
                      <div className="ui icon input">
                        <input
                          type="text"
                          name="username"
                          placeholder="Username"
                          onChange={handleUsernameChange}
                        />
                        <i className="user icon" />
                      </div>
                    </div>
                    <div className="required field">
                      <div className="ui icon input">
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          onChange={handlePasswordChange}
                        />
                        <i className="lock icon" />
                      </div>
                    </div>
                    <div className="field">
                      <div className="ui icon input">
                        <input
                          type="submit"
                          defaultValue="Login"
                          disabled={disableLogIn}
                          onClick={handleLogInClick}
                        />
                        <i className="right chevron icon" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
