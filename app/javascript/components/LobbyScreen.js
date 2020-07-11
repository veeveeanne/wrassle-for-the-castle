import React from 'react'
import { Link } from 'react-router-dom'

const LobbyScreen = (props) => {

  return (
    <div>
      lobby screen
      <br />
      <Link to="/games/0000">go to Game</Link>
    </div>
  )
}

export default LobbyScreen
