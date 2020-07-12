import React from 'react'

const VictoryScreen = (props) => {

  return (
    <div>
      victory screen
      <br />
      <button type="button" className="button primary" onClick={() => props.setCurrentPage("titleScreen")}>back to Title</button>
    </div>
  )
}

export default VictoryScreen
