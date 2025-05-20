import React, { useEffect } from 'react'
import { useState } from 'react';
import { saveDetails, getDetails } from '../../services/pdfServices';
import List from '../List';

function ImageProj() {

  const [fileData, setFileData] = useState({});

  const [fileUrl, setFileUrl] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const [imageDetails, setImageDetails] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  function handleChange(event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imageDataUrl = e.target.result;
        setFileData(imageDataUrl);
      };

      setFileUrl(URL.createObjectURL(file));
      reader.readAsDataURL(file);

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
      fileUrl: fileUrl,
      fileData: fileData
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
      </div>
      <div>
        <List details={imageDetails} />
      </div>
    </>
  )
}

export default ImageProj
