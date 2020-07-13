import React from 'react'

const ResultsScreen = (props) => {
  const { currentUser, opponent, setGameScreenPage, nextStep, nextCastle, handleRefresh } = props
    let presentation = (<h1> waiting for opponent </h1>)
    let display = "Waiting for your opponent. Send a scout out to spy on them!"

    if (props.game.guest_id) {
        display = ""
    }
    console.log("results screen, nextStep: " + nextStep)
    console.log("results screen, opponent: " + opponent.id)
    if (nextStep === "result") {
        presentation = (
          <div>
              <h1> your score: {currentUser.sent_soldiers} </h1>
              <h1> their score: {opponent.sent_soldiers} </h1>
              <input
                type="submit"
                className="button large"
                value="Next Battle"
                onClick={() => handleRefresh()}
              />
          </div>
        )
    }

    return (
        <div>
            {presentation}
        </div>
    )
}

export default ResultsScreen
