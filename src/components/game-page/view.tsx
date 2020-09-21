import * as React from 'react'
import { useCallback, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import logoImg from '../../images/logo.svg'

import '../../lib/comeon.game-1.0.min.js'

declare var comeon: any

const GamePage = () => {
  const { code } = useParams<{ code: string }>()
  const history = useHistory()
  useEffect(() => comeon.game.launch(code), [code])

  const handleBackClick = useCallback(() => history.goBack(), [history])

  return (
    <div>
      <div className="ui one column center aligned page grid">
        <div className="column twelve wide">
          <img src={logoImg} alt="logo" />
        </div>
      </div>
      <div className="main container">
        <div className="ingame">
          <div className="ui grid centered">
            <div className="three wide column">
              <div
                className="ui right floated secondary button inverted"
                onClick={handleBackClick}>
                <i className="left chevron icon" />
                Back
              </div>
            </div>
            <div className="ten wide column">
              <div id="game-launch" />
            </div>
            <div className="three wide column" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GamePage
