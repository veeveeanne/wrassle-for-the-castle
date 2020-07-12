import React from 'react'

const RefreshButton = (props) => {
  return (
    <button type="button" className="button" onClick={props.clickHandler}>
      <h2>Refresh</h2>
    </button>
  )
}

export default RefreshButton
