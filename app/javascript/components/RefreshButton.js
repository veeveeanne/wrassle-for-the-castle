import React from 'react'

const RefreshButton = (props) => {
  let refreshClass = ""
  if (props.refreshClass) {
    refreshClass = props.refreshClass
  }
  return (
    <button type="button" className={`button large ${refreshClass}`} onClick={props.clickHandler}>
      Send Scouts
    </button>
  )
}

export default RefreshButton
