import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const TEST_GAME_PASSCODE = '12345678'

const StartGameScreen = (props) => {
  const createNewGameFetch = () => {
    fetch('/v1/games', {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify({host: props.user}),
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

  const loadTestGameFetch = () => {
    fetch(`/v1/games/${TEST_GAME_PASSCODE}`)
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
      props.setGame(body[0])
    })
    .catch((error) => console.error(`Error in fetch: ${error.message}`))
  }

  useEffect(() => {
    // createNewGameFetch()
    loadTestGameFetch()
  },[])

  let gameShow = null
  if (props.game !== null) {
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
