import { useState, useRef } from 'react';
import { saveDetails, getDetails } from '../../services/ImageServices';
import List from '../List';

function ImageProj() {

  const [fileDetails, setFileDetails] = useState({
    fileData: '',
    fileName: '',
  });

  const [fileData, setFileData] = useState();
  const fileRef = useRef();

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
            fileName: file.name
          }
        ));
      };

      reader.readAsDataURL(file);
    }
  }

  function updateDetails() {
    setImageDetails(getDetails());
  }

  function uploadHandler() {

    const payload = {
      fileName: fileDetails.fileName,
      fileData: fileDetails.fileData
    }

    saveDetails(payload);

    updateDetails();
    setFileDetails({
      fileData: '',
      fileName: '',
    });

    fileRef.current.value  = '';

  }

  function previewDataSetter(fileData) {
    setFileData(fileData);
  }

  return (
    <>
      <div className='container border-1'>
        <label>Select image</label>
        <input ref = {fileRef} type="file" onChange={handleChange} />
        {fileDetails.fileData  && <button onClick={uploadHandler}>Upload</button>}
      </div>
      <div>
        <List details={imageDetails} updateDetails={updateDetails} previewDataSetter={previewDataSetter} >
          <img src={fileData} style={{ height: "300px", width: "300px" }} />
        </List>
      </div>
    </>
  )
}

export default ImageProj
