import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom';

function Modal({children, isClose}) {
    const dialog = useRef();

    useEffect(() => {
        if(dialog.current) {
            dialog.current.showModal();
        }
    }, []);

    console.log(" is close value ", isClose);

   if(isClose){
    dialog.current.close();
   }

  return createPortal(
    <dialog ref={dialog}>
      {children}
    </dialog>,
    document.getElementById("modal")
  )
}

export default Modal
