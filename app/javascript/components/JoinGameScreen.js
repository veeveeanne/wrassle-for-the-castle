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
      <Link to="/games/0000">go to Game</Link>
    </div>
  )
}

export default JoinGameScreen