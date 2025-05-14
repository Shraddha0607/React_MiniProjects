import React from 'react'

function Modal({children}) {
  return (
    <dialog>
      {children}
    </dialog>
  )
}

export default Modal
