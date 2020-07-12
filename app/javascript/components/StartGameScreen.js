import React, { useState, useEffect } from 'react'

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
      props.setGame(body.game)
    })
  }

  useEffect(() => {
    createNewGameFetch()
  },[])

  let gameShow = null
  let instructions = null
  if (props.game.passcode) {
    gameShow = props.game.passcode
    instructions = "Provide the passcode below to your opponent, and enter \
    the game when you are ready."
  }

  return (
    <div>
      lobby screen
      <br />
      <br />
      {instructions}
      <br />
      {gameShow}
      <br />
      <br />
      <button type="button" className="button primary" onClick={() => props.setCurrentPage("gameScreen")}>Enter Game</button>
    </div>
  )
}

export default StartGameScreen
