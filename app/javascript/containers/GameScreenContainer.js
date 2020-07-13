import React, {useState} from 'react'

import TroopDeployForm from '../components/TroopDeployForm'
import ResultsScreen from '../components/ResultsScreen'

const GameScreenContainer = (props) => {
  const { currentUser, setCurrentUser, game, setGame, opponent, setUpdateMessage, gameScreenPage, setGameScreenPage, nextStep } = props
  let display = "Waiting for your opponent. Send a scout out to spy on them!"

  if (game.guest_id) {
    display = ""
  }

  const submitSoldiers = (event) => {
    event.preventDefault()
    if (currentUser.sent_soldiers > currentUser.soldiers_remaining) {
      setUpdateMessage("You can not send more troops than you have available")
      return
    }
    setUpdateMessage("")
    const newSoldiersRemaining = currentUser.soldiers_remaining - currentUser.sent_soldiers
    const readyForBattleUser = { 
      ...currentUser, 
      ready_for_battle: true,
      soldiers_remaining: newSoldiersRemaining
    }

    fetch(`/v1/users/${currentUser.id}`,{
      credentials: "same-origin",
      method: "PATCH",
      body: JSON.stringify(readyForBattleUser),
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
      setCurrentUser(user)
      setGameScreenPage("resultsScreen")
    })    
  }

  const handleChange = (event) => {
    event.preventDefault()
    const newCurrentUser = {
      ...currentUser,
      sent_soldiers: event.currentTarget.value,
    }   
    setCurrentUser(newCurrentUser)
  }

  let showPage = null
  if (gameScreenPage === 'troopDeployForm') {
    showPage = (<TroopDeployForm 
    currentUser={currentUser}
    game={game}
    submitSoldiers={submitSoldiers}
    handleChange={handleChange}
    />)
  } else if (gameScreenPage === 'resultsScreen') {
    showPage = (
      <ResultsScreen
        opponent={opponent}
        currentUser={currentUser}
        game={game}
        nextStep={nextStep}
      />
    )
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
