import React, { useEffect } from 'react'
import { useState } from 'react';
import ImagePreview from './ImagePreview';
import { saveDetails, getDetails } from '../../services/pdfServices';
import List from '../List';

function ImageProj() {
  const [fileUrl, setFileUrl] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const [imageDetails, setImageDetails] = useState([]);

  // const details = getDetails();
  // console.log("detalis are ", details);
  // setImageDetails(details);

  function handleChange(event) {
    const file = event.target.files[0];
    console.log("file is ", file);

    setFileUrl(URL.createObjectURL(file));

    if (file) {
      setFileName(file.name);
    }
    else {
      setFileName('');
    }

  }

  useEffect(() => {

    const existingDetails = getDetails();
    console.log(" existing details ", existingDetails)
    setImageDetails(existingDetails);

  }, []);

  console.log(" file is ", fileUrl);
  console.log(" image details are ", imageDetails);

  function getPreviewHandler() {
    setIsOpen(true);
  }

  function uploadHandler() {

    const payload = {
      fileName: fileName,
      fileUrl: fileUrl
    }

    saveDetails(payload);
  }

  return (
    <>
      <div className='container border-1'>
        <label>Select image</label>
        <input type="file" onChange={handleChange} />
        {fileUrl != null && <button onClick={uploadHandler}>Upload</button>}
        {isOpen && <ImagePreview file={file} />}
        {fileUrl != null && <button onClick={getPreviewHandler}>Get Preview</button>}
      </div>
      <div>
        <List details={imageDetails} />
      </div>
    </>
  )
}

export default ImageProj
