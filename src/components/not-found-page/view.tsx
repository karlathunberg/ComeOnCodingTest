import * as React from 'react'

import logoImg from '../../images/logo.svg'

const NotFoundPage = () => (
  <div>
    <div className="ui one column center aligned page grid">
      <div className="column twelve wide">
        <img src={logoImg} alt="logo" />
      </div>
    </div>
    <div className="main container">404</div>
  </div>
)

export default NotFoundPage
