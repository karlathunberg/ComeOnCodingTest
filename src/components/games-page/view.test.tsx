import { cleanup, render } from '@testing-library/react'
import React from 'react'

import GamesPage from './view'

afterEach(cleanup)

const user = {
  username: '',
  name: '',
  avatar: '',
  event: '',
}

const handleGameClick = jest.fn()
const handleCategoryClick = jest.fn()
const handleSearchTextChange = jest.fn()
const handleLogOutClick = jest.fn()

const texts = {
  avatar: '',
  logOut: '',
  searchGame: '',
  games: '',
  categories: '',
  play: '',
}

describe('Games page', () => {
  test('does not break', () => {
    render(
      <GamesPage
        user={user}
        games={[]}
        onGameClick={handleGameClick}
        categories={[]}
        selectedCategoryId={0}
        onCategoryClick={handleCategoryClick}
        searchText=""
        onSearchTextChange={handleSearchTextChange}
        onLogOutClick={handleLogOutClick}
        texts={texts}
      />
    )
  })
})
