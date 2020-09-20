import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// imported to make sure parcel includes it
import '../../images/avatar/eric.jpg'
import '../../images/avatar/rebecka.jpg'
import '../../images/avatar/stoffe.jpg'
import '../../images/game-icon/deadoralive.jpg'
import '../../images/game-icon/jackandbeanstalk.jpg'
import '../../images/game-icon/jackhammer.jpg'
import '../../images/game-icon/starburst.jpg'
import '../../images/game-icon/twinspin.jpg'

import { selectAuthenticatedUser } from '../../redux/auth'
import logoImg from '../../images/logo.svg'
import { getGames, selectGamesState } from './services'
import { IGame } from './reducer'

const GamesPage = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectAuthenticatedUser)
  const { games } = useSelector(selectGamesState)

  useEffect(() => {
    dispatch(getGames())
  }, [dispatch])

  return (
    <div>
      <div className="ui one column center aligned page grid">
        <div className="column twelve wide">
          <img src={logoImg} alt="logo" />
        </div>
      </div>
      <div className="main container">
        <div className="casino">
          <div className="ui grid centered">
            <div className="twelve wide column">
              <div className="ui list">
                <div className="player item">
                  <img
                    className="ui avatar image"
                    src={user.avatar}
                    alt="avatar"
                  />
                  <div className="content">
                    <div className="header">
                      <b className="name">{user.name}</b>
                    </div>
                    <div className="description event">{user.event}</div>
                  </div>
                </div>
              </div>
              <div className="logout ui left floated secondary button inverted">
                <i className="left chevron icon" />
                Log Out
              </div>
            </div>
            <div className="four wide column">
              <div className="search ui small icon input ">
                <input type="text" placeholder="Search Game" />
                <i className="search icon" />
              </div>
            </div>
          </div>
          <div className="ui grid">
            <div className="twelve wide column">
              <h3 className="ui dividing header">Games</h3>
              <div className="ui relaxed divided game items links">
                {games.map((game) => (
                  <GameItem key={game.name} game={game} />
                ))}
              </div>
            </div>
            <div className="four wide column">
              <h3 className="ui dividing header">Categories</h3>
              <div className="ui selection animated list category items">
                {/* category item template */}
                <div className="category item">
                  <div className="content">
                    <div className="header" />
                  </div>
                </div>
                {/* end category item template */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const GameItem: React.FC<{ game: IGame }> = ({ game }) => (
  <div className="game item">
    <div className="ui small image">
      <img src={game.icon} alt="game-icon" />
    </div>
    <div className="content">
      <div className="header">
        <b className="name">{game.name}</b>
      </div>
      <div className="description">{game.description}</div>
      <div className="extra">
        <div className="play ui right floated secondary button inverted">
          Play
          <i className="right chevron icon" />
        </div>
      </div>
    </div>
  </div>
)

export default GamesPage
