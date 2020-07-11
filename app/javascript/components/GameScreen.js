import React from 'react'
import { Link } from 'react-router-dom'

const GameScreen = (props) => {

  return (
    <div>
      game screen
      <br />
      <Link to="/victory">go to Victory</Link>
    </div>
  )
}

export default GameScreen
