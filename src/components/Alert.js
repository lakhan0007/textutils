import React from 'react'

function Alert(props) {
  return (
    <div>
      <div ClassName="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{props.alert}</strong> 
        <button type="button" ClassName="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
  )
}

export default Alert
