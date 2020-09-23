import { cleanup, render } from '@testing-library/react'
import React from 'react'

import LoginPage from './view'

afterEach(cleanup)

const user = {
  username: '',
  name: '',
  avatar: '',
  event: '',
}

const handleUsernameChange = jest.fn()
const handlePasswordChange = jest.fn()
const handleLogInClick = jest.fn()

const texts = {
  username: '',
  password: '',
  logIn: '',
}

describe('Login page', () => {
  test('does not break', () => {
    render(
      <LoginPage
        onUsernameChange={handleUsernameChange}
        onPasswordChange={handlePasswordChange}
        onLogInClick={handleLogInClick}
        logInIsDisabled={false}
        error={''}
        texts={texts}
      />
    )
  })
})
