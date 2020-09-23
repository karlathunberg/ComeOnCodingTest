import * as React from 'react'
import { useCallback } from 'react'

import imageEric from '../../images/avatar/eric.jpg'
import imageRebecka from '../../images/avatar/rebecka.jpg'
import imageStoffe from '../../images/avatar/stoffe.jpg'
import imageDeadoralive from '../../images/game-icon/deadoralive.jpg'
import imageJackandbeanstalk from '../../images/game-icon/jackandbeanstalk.jpg'
import imageJackhammer from '../../images/game-icon/jackhammer.jpg'
import imageStarburst from '../../images/game-icon/starburst.jpg'
import imageTwinspin from '../../images/game-icon/twinspin.jpg'

/**
 * We are doing this because our bundler will change the url of these static resources
 * for production builds which means we can't rely on urls coming from the API.
 */
const images = {
  'images/avatar/eric.jpg': imageEric,
  'images/avatar/rebecka.jpg': imageRebecka,
  'images/avatar/stoffe.jpg': imageStoffe,
  'images/game-icon/deadoralive.jpg': imageDeadoralive,
  'images/game-icon/jackandbeanstalk.jpg': imageJackandbeanstalk,
  'images/game-icon/jackhammer.jpg': imageJackhammer,
  'images/game-icon/starburst.jpg': imageStarburst,
  'images/game-icon/twinspin.jpg': imageTwinspin,
}

import AppHeader from '../app-header'
import { ICategory, IGame } from './reducer'
import { AuthenticatedUser } from '../../redux/auth/reducer'

export interface ITexts {
  avatar: string
  logOut: string | React.ReactNode
  searchGame: string
  games: string | React.ReactNode
  categories: string | React.ReactNode
  play: string | React.ReactNode
}

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
  texts: ITexts
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
  texts,
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
                  src={images[user.avatar]}
                  alt={texts.avatar}
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
              {texts.logOut}
            </div>
          </div>
          <div className="four wide column">
            <div className="search ui small icon input ">
              <input
                type="text"
                placeholder={texts.searchGame}
                value={searchText ?? ''}
                onChange={onSearchTextChange}
              />
              <i className="search icon" />
            </div>
          </div>
        </div>
        <div className="ui grid">
          <div className="twelve wide column">
            <h3 className="ui dividing header">{texts.games}</h3>
            <div className="ui relaxed divided game items links">
              {games.map((game) => (
                <GameItem
                  key={game.name}
                  game={game}
                  onClick={onGameClick}
                  text={texts.play}
                />
              ))}
            </div>
          </div>
          <div className="four wide column">
            <h3 className="ui dividing header">{texts.categories}</h3>
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
  text: string | React.ReactNode
}> = ({ game, onClick, text }) => {
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
      onClick(game.code, event),
    [onClick, game.code]
  )

  return (
    <div className="game item">
      <div className="ui small image">
        <img src={images[game.icon]} alt="game-icon" />
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
            {text}
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
