import React, { useState } from 'react'
import Modal from '../Modal'

function ImagePreview({file}) {
    const[isClose, setIsClose] = useState(false);

    const closeHandler = () => {
        setIsClose(true);
        console.log("close call");
    }

  return (
    <Modal isClose={isClose}>
      <img src={file} style={{ height : "300px", width: "300px" }}/>
      <button onClick={closeHandler}>Close</button>
    </Modal>
  )
}

export default ImagePreview
