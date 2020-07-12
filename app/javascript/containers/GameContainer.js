import React, { useState, useEffect } from 'react'

import TitleScreen from '../components/TitleScreen'
import StartGameScreen from '../components/StartGameScreen'
import JoinGameScreen from '../components/JoinGameScreen'
import GameScreen from '../components/GameScreen'
import VictoryScreen from '../components/VictoryScreen'
import RefreshButton from '../components/RefreshButton'

const defaultGame = {
  id: null,
  passcode: null,
  current_castle: null
}
const defaultUser = {
  id: null,
  castle_points: null,
  screen_id: null,
  soldiers_remaining: null,
  sent_soldiers: null
}

const GameContainer = (props) => {
  const [game, setGame] = useState(defaultGame)
  const [currentUser, setCurrentUser] = useState(defaultUser)
  const [currentPage, setCurrentPage] = useState("titleScreen")

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
        let errorMessage = `${response.status} (${response.statusText})`
        let error = new Error(errorMessage)
        throw(error)
      }
    })
    .then((response) => response.json())
    .then((body) => {
      setCurrentUser(body)
    })
    .catch((error) => console.error(`Error in fetch: ${error.message}`))
  }, [])


  let showPage = null
  if (currentPage === "titleScreen") {
    showPage = <TitleScreen setCurrentPage={setCurrentPage} />
  } else if (currentPage === "joinGameScreen") {
    showPage = (
      <JoinGameScreen
        setCurrentPage={setCurrentPage}
        game={game}
        setGame={setGame}
      />
    )
  } else if (currentPage === "startGameScreen") {
    showPage = (
      <StartGameScreen
        setCurrentPage={setCurrentPage}
        game={game}
        setGame={setGame}
        currentUser={currentUser}
      />
    )
  } else if (currentPage === "gameScreen") {
    showPage = (
      <GameScreen
        setCurrentPage={setCurrentPage}
        game={game}
        setGame={setGame}
      />
    )
  } else if (currentPage === "victoryScreen") {
    showPage = (
      <VictoryScreen
        setCurrentPage={setCurrentPage}
      />
    )
  } else {
    showPage = <TitleScreen setCurrentPage={setCurrentPage} />
  }

  const onRefreshClick = (event) => {
    event.preventDefault()
    alert("hey I'm refreshing")
  }

  return (
    <>
      <RefreshButton clickHandler={onRefreshClick} />
      {showPage}
    </>
  )
}

export default GameContainer
