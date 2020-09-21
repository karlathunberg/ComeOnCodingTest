import * as React from 'react'
import { useCallback } from 'react'

// imported to make sure parcel includes it
import '../../images/avatar/eric.jpg'
import '../../images/avatar/rebecka.jpg'
import '../../images/avatar/stoffe.jpg'
import '../../images/game-icon/deadoralive.jpg'
import '../../images/game-icon/jackandbeanstalk.jpg'
import '../../images/game-icon/jackhammer.jpg'
import '../../images/game-icon/starburst.jpg'
import '../../images/game-icon/twinspin.jpg'

import AppHeader from '../app-header'
import { ICategory, IGame } from './reducer'
import { AuthenticatedUser } from '../../redux/auth/reducer'

const GamesPageView: React.FC<{
  user: AuthenticatedUser
  games: IGame[]
  onGameClick: (
    gameCode: string,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void
  categories: ICategory[]
  selectedCategoryId: number | null
  onCategoryClick: (
    categoryId: number,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void
  searchText: string | null
  onSearchTextChange:
    | ((event: React.ChangeEvent<HTMLInputElement>) => void)
    | undefined
  onLogOutClick:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined
}> = ({
  user,
  games,
  onGameClick,
  categories,
  selectedCategoryId,
  onCategoryClick,
  searchText,
  onSearchTextChange,
  onLogOutClick,
}) => (
  <div>
    <AppHeader />
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
            <div
              className="logout ui left floated secondary button inverted"
              onClick={onLogOutClick}>
              <i className="left chevron icon" />
              Log Out
            </div>
          </div>
          <div className="four wide column">
            <div className="search ui small icon input ">
              <input
                type="text"
                placeholder="Search Game"
                value={searchText ?? ''}
                onChange={onSearchTextChange}
              />
              <i className="search icon" />
            </div>
          </div>
        </div>
        <div className="ui grid">
          <div className="twelve wide column">
            <h3 className="ui dividing header">Games</h3>
            <div className="ui relaxed divided game items links">
              {games.map((game) => (
                <GameItem key={game.name} game={game} onClick={onGameClick} />
              ))}
            </div>
          </div>
          <div className="four wide column">
            <h3 className="ui dividing header">Categories</h3>
            <div className="ui selection animated list category items">
              {categories.map((category) => (
                <CategoryItem
                  key={category.id}
                  category={category}
                  selected={selectedCategoryId === category.id}
                  onClick={onCategoryClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const GameItem: React.FC<{
  game: IGame
  onClick: (
    gameCode: string,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void
}> = ({ game, onClick }) => {
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
      onClick(game.code, event),
    [onClick, game.code]
  )

  return (
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
          <div
            className="play ui right floated secondary button inverted"
            onClick={handleClick}>
            Play
            <i className="right chevron icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

const CategoryItem: React.FC<{
  category: ICategory
  selected: boolean
  onClick: (
    categoryId: number,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void
}> = ({ category, selected, onClick }) => {
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
      onClick(category.id, event),
    [onClick, category.id]
  )
  return (
    <div className="category item" onClick={handleClick}>
      <div className="content">
        <div className="header">
          {category.name}
          {selected && ' <'}
        </div>
      </div>
    </div>
  )
}
export default GamesPageView
