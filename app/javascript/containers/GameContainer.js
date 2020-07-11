import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import TitleScreen from '../components/TitleScreen'
import StartGameScreen from '../components/StartGameScreen'
import JoinGameScreen from '../components/JoinGameScreen'
import GameScreen from '../components/GameScreen'
import VictoryScreen from '../components/VictoryScreen'

const defaultGame = { 
  passcode: null, 
  current_castle: null 
}
const defaultUser = { 
  castle_points: null,
  screen_id: null,
  soldiers_remaining: null,
  sent_soldiers: null  
}

const GameContainer = (props) => {
  const [game, setGame] = useState(defaultGame)
  const [currentUser, setCurrentUser] = useState(defaultUser)
  const [currentPage, setCurrentPage] = useState("titleScreen")

  const titleScreenComponent = (
    <TitleScreen
      game={game}
      setGame={setGame}
    />
  )

  useEffect(() => {
    fetch('/v1/users', {
      credentials: "same-origin",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then((response) => {
        if (response.ok) {
          return response
        } else {
          debugger
        }
      })
      .then((response) => response.json())
      .then((body) => {
      setCurrentUser(body)
      })
  }, [])

  let lobbyScreenComponent
  if (true) {
    lobbyScreenComponent = (          
      <StartGameScreen 
        game={game}
        setGame={setGame}
      />
    )
  } else {
    lobbyScreenComponent = (          
      <JoinGameScreen 
        game={game}
        setGame={setGame}
      />
    )  
  }

  // if (currentPage === "titleScreen") {
  //   <TitleScreen setCurrentPage ={setCurrentPage} />
  // } else if (currentPage === "joinGame") {
  //   <
  // }

  return (
    <div>
      game container
      <Switch>
        <Route path="/title">
          {titleScreenComponent}
        </Route>
        <Route path="/lobby">
          {lobbyScreenComponent}
        </Route>
        <Route path="/victory">
          <VictoryScreen
            game={game}
            setGame={setGame}
          />
        </Route>
        <Route path="/games/:id">
          <GameScreen 
            game={game}
            setGame={setGame}
          />
        </Route>
        <Route path="/">
          {titleScreenComponent}
        </Route>        
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default GameContainer
