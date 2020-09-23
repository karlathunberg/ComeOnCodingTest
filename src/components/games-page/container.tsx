import * as React from 'react'
import { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import {
  logOut,
  selectAuthenticatedUser,
  selectAuthState,
} from '../../redux/auth'
import { useFormatMessage } from '../../localization'
import {
  getGames,
  getCategories,
  selectGamesState,
  selectCategory,
  search,
} from './services'
import GamesPageView from './view'

const GamesPageContainer = () => {
  const history = useHistory()

  const dispatch = useDispatch()
  const user = useSelector(selectAuthenticatedUser)
  const { isAuthenticated, isLoading } = useSelector(selectAuthState)
  const {
    games: allGames,
    categories,
    selectedCategoryId,
    searchText,
  } = useSelector(selectGamesState)

  useEffect(() => {
    dispatch(getGames())
    dispatch(getCategories())
  }, [dispatch])

  const handleGameClick = useCallback(
    (gameCode: string) => history.push(`/games/${gameCode}`),
    [history]
  )

  const handleCategoryClick = useCallback(
    (categoryId: number) => {
      dispatch(selectCategory(categoryId))
    },
    [dispatch, selectCategory]
  )

  const handleSearchTextChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(search(event.target.value))
    },
    [dispatch, search]
  )

  const canLogOut = isAuthenticated && !isLoading

  const handleLogOutClick = useCallback(() => {
    if (canLogOut) {
      dispatch(logOut(user.username))
    }
  }, [dispatch, logOut, canLogOut])

  const games = useMemo(
    () =>
      allGames
        .filter(
          (game) =>
            !selectedCategoryId ||
            game.categoryIds.some((id) => id === selectedCategoryId)
        )
        .filter(
          (game) =>
            !searchText || game.name.toLowerCase().indexOf(searchText) !== -1
        ),
    [allGames, selectedCategoryId, searchText]
  )

  const [t] = useFormatMessage()
  const texts = {
    avatar: t('GAMES_PAGE_AVATAR'),
    logOut: t('GAMES_PAGE_LOG_OUT'),
    searchGame: t('GAMES_PAGE_SEARCH_GAME'),
    games: t('GAMES_PAGE_GAMES'),
    categories: t('GAMES_PAGE_CATEGORIES'),
    play: t('GAMES_PAGE_PLAY'),
  }

  return (
    <GamesPageView
      user={user}
      games={games}
      onGameClick={handleGameClick}
      categories={categories}
      selectedCategoryId={selectedCategoryId}
      onCategoryClick={handleCategoryClick}
      searchText={searchText}
      onSearchTextChange={handleSearchTextChange}
      onLogOutClick={handleLogOutClick}
      texts={texts}
    />
  )
}

export default GamesPageContainer
