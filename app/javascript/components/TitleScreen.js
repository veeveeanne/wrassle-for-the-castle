import React from 'react'
import { Link } from 'react-router-dom'

const TitleScreen = (props) => {

  return (
    <div>
      title screen
      <br />
      <Link to="/lobby">go to Lobby</Link>
    </div>
  )
}

export default TitleScreen
