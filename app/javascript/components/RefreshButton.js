import React from 'react'

const RefreshButton = (props) => {
  return (
    <div onClick={props.clickHandler}>
      <h2>Refresh</h2>
    </div>
  )
}

export default RefreshButton
