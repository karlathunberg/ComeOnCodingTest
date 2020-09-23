/**
 * This file contains all american english translations (messages) used in the web app.
 * Must be a flat key-value object where keys are sorted in alphanumerical order.
 * We are using the ICU message syntax: https://formatjs.io/guides/message-syntax/
 * Format keys using upper snake case and name them by a hierarchy representing location inside the app
 * Example: 'USER_LIST_PAGE_ADD_BUTTON_TEXT'
 */
import { IMessages } from './messages'

const messages: IMessages & Record<string, string> = {
  GAMES_PAGE_AVATAR: 'Avatar',
  GAMES_PAGE_LOG_OUT: 'Log out',
  GAMES_PAGE_SEARCH_GAME: 'Search game',
  GAMES_PAGE_GAMES: 'Game',
  GAMES_PAGE_PLAY: 'Play',
  GAMES_PAGE_CATEGORIES: 'Categories',
  LOG_IN_PAGE_USERNAME: 'Username',
  LOG_IN_PAGE_PASSWORD: 'Password',
  LOG_IN_PAGE_LOG_IN: 'Log in',
  TITLE: 'ComeOn Coding Test',
}

export default messages
