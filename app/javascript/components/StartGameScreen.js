import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const StartGameScreen = (props) => {
  debugger
  const [gameCode, setGameCode] = useState("")


  useEffect(() => {
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
      setGameCode(body)
    })
  }, [])

  return (
    <div>
      lobby screen
      <br />
      <Link to="/games/0000">go to Game</Link>
    </div>
  )
}

export default StartGameScreen
