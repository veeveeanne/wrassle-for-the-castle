import React from 'react'

const GameScreen = (props) => {
  let display = "Waiting for your opponent. Send a scout out to spy on them!"

  if (props.game.guest_id) {
    display = ""
  }

  return (
    <div>
      game screen
      <br />
      <br />
      Game Room: {props.game.passcode}
      <br />
      {display}
      <br />
      <br />
      <button onClick={() => props.setCurrentPage("victoryScreen")}>go to Victory</button>
    </div>
  )
}

export default GameScreen
