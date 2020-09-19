/**
 * This file contains all swedish translations (messages) used in the web app.
 * Must be a flat key-value object where keys are sorted in alphanumerical order.
 * We are using the ICU message syntax: https://formatjs.io/guides/message-syntax/
 * Format keys using upper snake case and name them by a hierarchy representing location inside the app
 * Example: 'USER_LIST_PAGE_ADD_BUTTON_TEXT'
 */
import { IMessages } from './messages'

const messages: IMessages & Record<string, string> = {
  TITLE: 'ComeOn - Kodtest',
}

export default messages
