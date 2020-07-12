import React, { useState, useEffect } from 'react'

const TitleScreen = (props) => {

  return (
    <div>
      title screen
      <br />
      <br />
      <button type="button" className="button primary" onClick={() => props.setCurrentPage("startGameScreen")}>Start a game</button>
      <button type="button" className="button primary" onClick={() => props.setCurrentPage("joinGameScreen")}>Join a game</button>
    </div>
  )
}

export default TitleScreen
