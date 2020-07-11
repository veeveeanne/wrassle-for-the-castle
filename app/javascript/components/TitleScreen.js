import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const TitleScreen = (props) => {

  return (
    <div>
      title screen
      <br />
      <Link to="/startgamescreen">Start a Game</Link>
      <Link to="/joingamescreen">Join a Game</Link>
    </div>
  )
}

export default TitleScreen
