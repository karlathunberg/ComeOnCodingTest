import { cleanup, render } from '@testing-library/react'
import React from 'react'

import GamePage from './view'

afterEach(cleanup)

const handleBackClick = jest.fn()

describe('Game page', () => {
  test('does not break', () => {
    render(<GamePage onBackClick={handleBackClick} texts={{ back: 'back' }} />)
  })
})
