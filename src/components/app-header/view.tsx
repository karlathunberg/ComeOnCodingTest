import * as React from 'react'

import logoImg from '../../images/logo.svg'

const AppHeader = () => (
  <div className="ui one column center aligned page grid">
    <div className="column twelve wide">
      <img src={logoImg} alt="logo" />
    </div>
  </div>
)

export default AppHeader
