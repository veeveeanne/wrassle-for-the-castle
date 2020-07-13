import React, { useState, useEffect } from 'react'

import TitleScreen from '../components/TitleScreen'
import StartGameScreen from '../components/StartGameScreen'
import JoinGameScreen from '../components/JoinGameScreen'
import GameScreenContainer from './GameScreenContainer'
import VictoryScreen from '../components/VictoryScreen'
import RefreshButton from '../components/RefreshButton'
import StatusMessage from '../components/StatusMessage'

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
const defaultPasscode = {
  passcode: ""
}

const GameContainer = (props) => {
  const [game, setGame] = useState(defaultGame)
  const [currentUser, setCurrentUser] = useState(defaultUser)
  const [opponent, setOpponent] = useState(defaultUser)
  const [currentPage, setCurrentPage] = useState("titleScreen")
  const [gameScreenPage, setGameScreenPage] = useState('troopDeployForm')
  const [passcodeForm, setPasscodeForm] = useState(defaultPasscode)
  const [updateMessage, setUpdateMessage] = useState("")
  const [nextStep, setNextStep] = useState('')

  const handlePasscodeFormChange = (event) => {
    setPasscodeForm({
      ...passcodeForm,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

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
        setGame={setGame}
        handleFormChange={handlePasscodeFormChange}
        passcodeForm={passcodeForm}
        currentUser={currentUser}
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
      <div>
        <StatusMessage updateMessage={updateMessage}/>
        <GameScreenContainer
          setCurrentPage={setCurrentPage}
          game={game}
          setGame={setGame}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          setUpdateMessage={setUpdateMessage}
          gameScreenPage={gameScreenPage}
          setGameScreenPage={setGameScreenPage}
          opponent={opponent}
          setOpponent={setOpponent}
          nextStep={nextStep}
          setNextStep={setNextStep}
        />
      </div>
    )
  } else if (currentPage === "victoryScreen") {
    showPage = (
      <VictoryScreen
        game={game}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setUpdateMessage={setUpdateMessage}
        opponent={opponent}
        setOpponent={setOpponent}
      />
    )
  } else {
    showPage = <TitleScreen setCurrentPage={setCurrentPage} />
  }

  return (
    <>
      {showPage}
    </>
  )
}

export default GameContainer
