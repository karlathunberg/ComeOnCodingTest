import * as React from 'react'

import AppHeader from '../app-header'

const GamePageView: React.FC<{
  onBackClick:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined
}> = ({ onBackClick }) => {
  return (
    <div>
      <AppHeader />
      <div className="main container">
        <div className="ingame">
          <div className="ui grid centered">
            <div className="three wide column">
              <div
                className="ui right floated secondary button inverted"
                onClick={onBackClick}>
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

export default GamePageView
