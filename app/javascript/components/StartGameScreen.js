import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const TEST_GAME_PASSCODE = '12345678'

const StartGameScreen = (props) => {
  const createNewGameFetch = () => {
    const newGameParams = {
      host_id: props.currentUser.id
    }
    fetch('/v1/games', {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(newGameParams),
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
      props.setGame(body)
    })
  }

  useEffect(() => {
    createNewGameFetch()
  },[])

  let gameShow = null
  if (props.game.passcode) {
    gameShow = props.game.passcode
  }
  return (
    <div>
      lobby screen
      {gameShow}
      <br />
      <div onClick={() => props.setCurrentPage("gameScreen")}>go to Game</div>
    </div>
  )
}

export default StartGameScreen
