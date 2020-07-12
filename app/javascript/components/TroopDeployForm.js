import React from 'react'

const TroopDeployForm = (props) => {
    let display = "Waiting for your opponent. Send a scout out to spy on them!"

    if (props.game.guest_id) {
        display = ""
    }


    return (
        <div>
            <h1> Castle Number: {props.game.current_castle}</h1>
            <form>
                <input type="text" label="How many?" />
            </form>
        </div>
    )
}

export default TroopDeployForm
