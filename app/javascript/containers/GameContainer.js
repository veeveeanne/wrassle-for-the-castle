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
        <Route path="/title">
          <TitleScreen />
        </Route>
        <Route path="/lobby">
          <LobbyScreen />
        </Route>
        <Route path="/victory">
          <VictoryScreen />
        </Route>
        <Route path="/games/:id">
          <GameScreen />
        </Route>
        <Route path="/">
          <TitleScreen />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default GameContainer
