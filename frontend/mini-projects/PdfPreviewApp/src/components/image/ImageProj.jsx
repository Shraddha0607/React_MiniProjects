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
  const [isUpdated, setIsUpdated] = useState(false);

  function handleChange(event) {
    const file = event.target.files[0];
    console.log("file is ", file);
    console.log("in file url saved  is ", URL.createObjectURL(file));

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
    setImageDetails(existingDetails);
    console.log("inside useEffect ", imageDetails)

  }, [isUpdated]);

  console.log(" isUpdated is ", isUpdated);

  function getPreviewHandler() {
    setIsOpen(true);
  }

  function uploadHandler() {

    const payload = {
      fileName: fileName,
      fileUrl: fileUrl
    }

    saveDetails(payload);
    setIsUpdated(!isUpdated);
    setIsOpen(false);
    setFileUrl("");
  }

  return (
    <>
      <div className='container border-1'>
        <label>Select image</label>
        <input type="file" onChange={handleChange} />
        {fileUrl != null && <button onClick={uploadHandler}>Upload</button>}
        {isOpen && <ImagePreview file={fileUrl} />}
        {fileUrl != null && <button onClick={getPreviewHandler}>Get Preview</button>}
      </div>
      <div>
        <List details={imageDetails} />
      </div>
    </>
  )
}

export default ImageProj
