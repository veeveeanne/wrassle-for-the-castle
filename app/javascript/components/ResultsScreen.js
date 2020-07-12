import React from 'react'

const ResultsScreen = (props) => {
    let display = "Waiting for your opponent. Send a scout out to spy on them!"
    // const [opponentUser, setOpponentUser] = useState(?)

    if (props.game.guest_id) {
        display = ""
    }

    return (
        <div>
            <h1>Castle number: </h1>
            <h3> You sent: </h3>
            <h3> They sent: </h3>
        </div>
    )
}

export default ResultsScreen
