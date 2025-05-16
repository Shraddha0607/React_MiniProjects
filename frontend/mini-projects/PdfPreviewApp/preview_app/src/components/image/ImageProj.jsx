import React from 'react'
import { useState } from 'react';
import ImagePreview from './ImagePreview';

function ImageProj() {
    const [file, setFile] = useState();
    const [isOpen, setIsOpen] = useState(false);

  function handleChange (event) {
    console.log(event.target.files);
    setFile(URL.createObjectURL(event.target.files[0]));
  }

  console.log(" file is ", file);

  function getPreviewHandler() {
    setIsOpen(true);
  }

    return (
        <div>
            <label>Select image</label>
            <input type="file" onChange={handleChange} />
            {isOpen && <ImagePreview file={file} />}
            {file != null && <button onClick={getPreviewHandler}>Get Preview</button>}
        </div>
    )
}

export default ImageProj
