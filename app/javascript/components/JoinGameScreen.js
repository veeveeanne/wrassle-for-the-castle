import React from 'react'

const JoinGameScreen = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`/v1/games/${props.passcodeForm.passcode}/${props.currentUser.id}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        debugger
      }
    })
    .then(body => {
      props.setGame(body.game)
    })
    props.setCurrentPage("gameScreen")
  }

  return (
    <div>
      join a game screen
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="passcode">Enter the passcode to join a game: </label>
        <input
          id="passcode"
          name="passcode"
          type="text"
          value={props.passcodeForm.passcode}
          onChange={props.handleFormChange}
        />
        <input
          type="submit"
          value="Join Game"
        />
      </form>
    </div>
  )
}

export default JoinGameScreen
