import React from 'react'

function Input({label, type, ...props }) {
  return (
    <div>
        <label>{label}</label>
        <input type={type} {...props} />
    </div>
  )
}

export default Input
