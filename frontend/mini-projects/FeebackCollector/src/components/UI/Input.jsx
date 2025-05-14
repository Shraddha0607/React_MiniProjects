import React from 'react'

function Input({ label, type, id }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input required type={type} name={id}></input>
    </div>
  )
}

export default Input
