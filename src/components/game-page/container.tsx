import * as React from 'react'
import { useCallback, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { useFormatMessage } from '../../localization'
import GamesPageView from './view'

declare var comeon: any

const GamePageContainer = () => {
  const { code } = useParams<{ code: string }>()
  const history = useHistory()
  useEffect(() => comeon.game.launch(code), [code])

  const handleBackClick = useCallback(() => history.push('/games'), [history])

  const [t] = useFormatMessage()
  const texts = {
    back: t('GAME_PAGE_BACK'),
  }

  return <GamesPageView onBackClick={handleBackClick} texts={texts} />
}

export default GamePageContainer
