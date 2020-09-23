import * as React from 'react'

import AppHeader from '../app-header'

export interface ITexts {
  username: string
  password: string
  logIn: string
}

const LoginPageView: React.FC<{
  onUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onLogInClick: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void
  logInIsDisabled: boolean
  error: string | null
  texts: ITexts
}> = ({
  texts,
  onUsernameChange,
  onPasswordChange,
  onLogInClick,
  logInIsDisabled,
  error,
}) => (
  <div>
    <AppHeader />
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
                        placeholder={texts.username}
                        onChange={onUsernameChange}
                      />
                      <i className="user icon" />
                    </div>
                  </div>
                  <div className="required field">
                    <div className="ui icon input">
                      <input
                        type="password"
                        name="password"
                        placeholder={texts.password}
                        onChange={onPasswordChange}
                      />
                      <i className="lock icon" />
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui icon input">
                      <input
                        type="submit"
                        defaultValue={texts.logIn}
                        disabled={logInIsDisabled}
                        onClick={onLogInClick}
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

export default LoginPageView
