import React from 'react'
import HeadShake from 'react-reveal/HeadShake';

const TroopDeployForm = (props) => {
  let presentation

  if (!props.game.guest_id) {
    presentation = (
      <div>
        <img className="background" src={require('./background.jpg')} />
        <HeadShake>
          <h5 className="message">Waiting for your opponent. Send a scout out to spy on them!</h5>
        </HeadShake>
      </div>
    )
  } else {
    presentation = (
      <div>
        <img className="troops" src={require('./troops.png')} />
        <h1> Castle Number: {props.game.current_castle}</h1>
        <form onSubmit={props.submitSoldiers}>
            <label>How many troops would you like to send to castle #{props.game.current_castle}?
            <input type="number" pattern="[0-9]*" onChange={props.handleChange} />
            </label>
            <input className="button" type="submit" />
        </form>
      </div>)
  }

  return (
      <div>
        {presentation}
      </div>
  )
}

export default TroopDeployForm
