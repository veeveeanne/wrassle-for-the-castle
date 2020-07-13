import React from 'react'

const VictoryScreen = (props) => {
  // debugger
  const currentUser = props.currentUser
  let id = currentUser.id
  // let display = (
  //   <div>
  //     You finished all the battles!
  //     <button type="button" className="button" onClick={() => victoryRefresh()}>Who won the game?</button>
  //   </div>
  // )

  const victoryRefresh = () => {
    fetch(`/v1/games/${props.game.passcode}/${props.currentUser.id}/refresh`)
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
    .then(body => {
      if (body.game_status === "over") {
        props.setOpponent(body.opponent)
        props.setCurrentUser(body.current_user)

        display = (
          <div>
            it works!
          </div>
        )
      } else {
        props.setUpdateMessage("The damages are still being accessed")
      }
    })
  }

  // return (
  //   <div>
  //     You finished all the battles!
  //     <button type="button" className="button" onClick={() => victoryRefresh()}>Who won the game?</button>
  //   </div>
  // )

  return (
    <div>
      You finished all the battles!
    </div>
  )

}

export default VictoryScreen
