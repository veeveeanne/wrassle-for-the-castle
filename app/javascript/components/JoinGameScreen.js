import React from 'react'
import { Link } from 'react-router-dom'

const JoinGameScreen = (props) => {

  return (
    <div>
      <form>
        <label htmlFor="passcode">Enter the access code to join a game: </label>
        <input
          id="passcode"
          name="passcode"
          type="text"
        />
        <input
          type="submit"
          value="Join Game"
        />
      </form>
      join a game screen
      <br />
      <div onClick={() => props.setCurrentPage("gameScreen")}>go to Game</div>

    </div>
  )
}

export default JoinGameScreen
