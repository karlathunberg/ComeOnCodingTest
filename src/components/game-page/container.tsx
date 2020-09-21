import * as React from 'react'
import { useCallback, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import GamesPageView from './view'

import '../../lib/comeon.game-1.0.min.js'

declare var comeon: any

const GamePageContainer = () => {
  const { code } = useParams<{ code: string }>()
  const history = useHistory()
  useEffect(() => comeon.game.launch(code), [code])

  const handleBackClick = useCallback(() => history.goBack(), [history])

  return <GamesPageView onBackClick={handleBackClick} />
}

export default GamePageContainer
