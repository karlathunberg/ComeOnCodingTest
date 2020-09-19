import { cleanup, render } from '@testing-library/react'
import React from 'react'

import App from './app'

afterEach(cleanup)

describe('App', () => {
  test('does not break', () => {
    render(<App />)
  })
})
