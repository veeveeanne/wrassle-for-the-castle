import React from 'react'

const StatusMessage = (props) => {
  return (
    <div className="status">
      <h5>{props.updateMessage}</h5>
    </div>
  )
}

export default StatusMessage
