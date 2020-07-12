import React from 'react'

const VictoryScreen = (props) => {

  return (
    <div>
      victory screen
      <br />
      <div onClick={() => props.setCurrentPage("titleScreen")}>back to Title</div>
    </div>
  )
}

export default VictoryScreen
