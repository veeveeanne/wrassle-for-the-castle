import React from 'react'
import { Link } from 'react-router-dom'

const GameScreen = (props) => {

  return (
    <div>
      game screen
      <br />
      <div onClick={() => props.setCurrentPage("victoryScreen")}>go to Victory</div>
    </div>
  )
}

export default GameScreen
