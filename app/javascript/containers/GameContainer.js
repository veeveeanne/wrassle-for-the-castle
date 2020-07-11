import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import TitleScreen from '../components/TitleScreen'
import LobbyScreen from '../components/LobbyScreen'
import GameScreen from '../components/GameScreen'
import VictoryScreen from '../components/VictoryScreen'

const GameContainer = (props) => {

  return (
    <div>
      game container
      <Switch>
        <Route path="/title" render={(props) => <TitleScreen {...props} />} />
        <Route path="/lobby" render={(props) => <LobbyScreen {...props} />} />
        <Route path="/victory" render={(props) => <VictoryScreen {...props} />} />
        <Route path="/games/:id" render={(props) => <GameScreen {...props} />} />
        <Route path="/" render={(props) => <TitleScreen {...props} />} />
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default GameContainer
