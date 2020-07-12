import React, { useState, useEffect } from 'react'

const TitleScreen = (props) => {

  return (
    <div>
      title screen
      <br />
      <br />
      <button onClick={() => props.setCurrentPage("startGameScreen")}>Start a game</button>
      <button onClick={() => props.setCurrentPage("joinGameScreen")}>Join a game</button>
    </div>
  )
}

export default TitleScreen
