import React, { useState, useEffect } from 'react'

const TitleScreen = (props) => {

  return (
    <div>
      title screen
      <br />
      <div onClick={() => props.setCurrentPage("startGameScreen")}>Start a game</div>
      <div onClick={() => props.setCurrentPage("joinGameScreen")}>Join a game</div>
    </div>
  )
}

export default TitleScreen
