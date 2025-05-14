import React from 'react'

function Input({name}) {
  return (
    <div>
      <label>{name}</label>
      <input required></input>
    </div>
  )
}

export default Input
