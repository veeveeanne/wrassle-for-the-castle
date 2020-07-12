import React, {useState} from 'react'

import TroopDeployForm from './TroopDeployForm'
import ResultsScreen from './ResultsScreen'

const GameScreenContainer = (props) => {
  const { currentUser, setCurrentUser, game, setGame, opponent } = props
  let display = "Waiting for your opponent. Send a scout out to spy on them!"
  const [gameScreenPage, setGameScreenPage] = useState('troopDeployForm')

  if (game.guest_id) {
    display = ""
  }

  // userPayload takes this structure:
  // {
  //  user: {
  //    screen_id: 
  //    *soldiers_remaining: 
  //    *sent_soldiers
  //    castle_points, :
  //    *ready_for_battle, : 
  //    *ready_for_next_turn, : 
  //  }
  // }

  const submitSoldiers = (userPayload) => {
    // post current user data
    fetch(`/v1/users/${currentUser.id}`,{
      credentials: "same-origin",
      method: "PATCH",
      body: JSON.stringify(userPayload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }      
    })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
        let error = new Error(errorMessage)
        throw (error)
      }
    })
    .then(response => response.json())
    .then(user => {
  // success: return updated user (set state and reload?)
      console.log(user)
      setCurrentUser(user)
    })    
  }

  let showPage = null
  if (gameScreenPage === 'troopDeployForm') {
    showPage = (<TroopDeployForm 
    currentUser={currentUser}
    game={game}
    submitSoldiers={submitSoldiers}
    />)
  } else if (gameScreenPage === 'resultsScreen') {
    showPage = (<ResultsScreen
    opponent={opponent}
    currentUser={currentUser}
    game={game}
    />)
  }

  return (
    <div>
      game screen
      <br />
      <br />
      Game Room: {props.game.passcode}
      <br />
      {showPage}
      <br />
      <br />
      <button onClick={() => props.setCurrentPage("victoryScreen")}>go to Victory</button>
    </div>
  )
}

export default GameScreenContainer
