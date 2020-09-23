/**
 * This file contains all swedish translations (messages) used in the web app.
 * Must be a flat key-value object where keys are sorted in alphanumerical order.
 * We are using the ICU message syntax: https://formatjs.io/guides/message-syntax/
 * Format keys using upper snake case and name them by a hierarchy representing location inside the app
 * Example: 'USER_LIST_PAGE_ADD_BUTTON_TEXT'
 */
import { IMessages } from './messages'

const messages: IMessages & Record<string, string> = {
  GAME_PAGE_BACK: 'Tillbaka',
  GAMES_PAGE_AVATAR: 'Avatar',
  GAMES_PAGE_LOG_OUT: 'Logga ut',
  GAMES_PAGE_SEARCH_GAME: 'Sök spel',
  GAMES_PAGE_GAMES: 'Spel',
  GAMES_PAGE_CATEGORIES: 'Kategorier',
  GAMES_PAGE_PLAY: 'Spela',
  LOG_IN_PAGE_USERNAME: 'Användarnamn',
  LOG_IN_PAGE_PASSWORD: 'Lösenord',
  LOG_IN_PAGE_LOG_IN: 'Logga in',
  TITLE: 'ComeOn - Kodtest',
}

export default messages
