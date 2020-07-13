import React from 'react'

const RefreshButton = (props) => {
  return (
    <button type="button" className="button large refresh" onClick={props.clickHandler}>
      Send Scouts
    </button>
  )
}

export default RefreshButton
