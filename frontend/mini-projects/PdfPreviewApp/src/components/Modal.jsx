import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom';

function Modal({ children, isOpen }) {
  const dialog = useRef();

  return createPortal(
    isOpen && <dialog ref={dialog} open>
      {children}
    </dialog>,
    document.getElementById("modal")
  )
}

export default Modal
