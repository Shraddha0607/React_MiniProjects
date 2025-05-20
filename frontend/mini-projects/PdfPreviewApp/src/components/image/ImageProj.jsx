import { useState } from 'react';
import { saveDetails, getDetails } from '../../services/pdfServices';
import List from '../List';

function ImageProj() {

  const [fileDetails, setFileDetails] = useState({
    fileData: '',
    fileName: '',
    isUpdated: false
  });

  const [imageDetails, setImageDetails] = useState(getDetails());

  function handleChange(event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imageDataUrl = e.target.result;
        setFileDetails((prevDetails) => (
          {
            ...prevDetails, 
            fileData: imageDataUrl,
            fileName : file.name
          }
        ));
      };

      reader.readAsDataURL(file);
    }
  }

  function uploadHandler() {

    const payload = {
      fileName: fileDetails.fileName,
      fileData: fileDetails.fileData
    }

    saveDetails(payload);
    setFileDetails((prevDetails) => ({
      ...prevDetails,
      isUpdated : !prevDetails.isUpdated
    }))
    setImageDetails(getDetails());
  }

  return (
    <>
      <div className='container border-1'>
        <label>Select image</label>
        <input type="file" onChange={handleChange} />
        {fileDetails.fileData != null && <button onClick={uploadHandler}>Upload</button>}
      </div>
      <div>
        <List details={imageDetails} />
      </div>
    </>
  )
}

export default ImageProj
