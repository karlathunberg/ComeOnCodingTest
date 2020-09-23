import * as React from 'react'

import logoImg from '../../images/logo.svg'

const LoginPage = () => (
  <div>
    <div className="ui one column center aligned page grid">
      <div className="column twelve wide">
        <img src={logoImg} alt="logo" />
      </div>
    </div>
    <div className="main container">
      <div className="login">
        <div className="ui grid centered">
          <form>
            <div className="fields">
              <div className="required field">
                <div className="ui icon input">
                  <input type="text" name="username" placeholder="Username" />
                  <i className="user icon" />
                </div>
              </div>
              <div className="required field">
                <div className="ui icon input">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <i className="lock icon" />
                </div>
              </div>
              <div className="field">
                <div className="ui icon input">
                  <input type="submit" defaultValue="Login" />
                  <i className="right chevron icon" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default LoginPage
