import React, { useState, useEffect } from 'react'

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


  let showPage = null
  if (currentPage === "titleScreen") {
    showPage = <TitleScreen setCurrentPage ={setCurrentPage} />
  } else if (currentPage === "joinGameScreen") {
    showPage = <JoinGameScreen setCurrentPage={setCurrentPage} />
  } else if (currentPage === "startGameScreen") {
    showPage = <StartGameScreen setCurrentPage={setCurrentPage} />
  } else if (currentPage === "gameScreen") {
    showPage = <StartGameScreen setCurrentPage={setCurrentPage} />
  } else if (currentPage === "victoryScreen") {
    showPage = <VictoryScreen setCurrentPage={setCurrentPage} />
  } else {
    showPage = <TitleScreen setCurrentPage={setCurrentPage} />
  }

  const onRefreshClick = (event) => {
    event.preventDefault()
    fetch(`/v1/games/${game.passcode}`)
    .then((response) => {
      if (response.ok) {
        return response
      } else {
        debugger
      }
    })
    .then(response => response.json())
    .then(body => {
      setGame(body)
      const updatedCurrentUser = body.users.find(user => user.id === currentUser.id)
      setCurrentUser(updatedCurrentUser)
    })
  }

  return (
    <>
      {showPage}
    </>
  )
}

export default GameContainer
