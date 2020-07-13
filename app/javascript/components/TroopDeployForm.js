import React from 'react'
import HeadShake from 'react-reveal/HeadShake';
import Pulse from 'react-reveal/Pulse';

import RefreshButton from './RefreshButton'

const TroopDeployForm = (props) => {
  let presentation
  let refreshClass

  if (!props.game.guest_id) {
    refreshClass = "refresh"
    presentation = (
      <div>
        <img className="background" src={require('./background.jpg')} />
        <HeadShake>
          <h5 className="message">Waiting for your opponent. Send a scout out to spy on them!</h5>
        </HeadShake>
        <RefreshButton
          refreshClass={refreshClass}
          clickHandler={props.refreshClickHandler}
        />
      </div>
    )
  } else {
    presentation = (
      <div>
        <Pulse>
          <img className="troops" src={require('./troops.png')} />
        </Pulse>
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
