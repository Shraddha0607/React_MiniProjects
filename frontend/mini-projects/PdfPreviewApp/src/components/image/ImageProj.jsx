import { useState, useRef } from 'react';
import { saveDetails, getDetails } from '../../services/ImageServices';
import List from '../List';

function ImageProj() {

  const [fileDetails, setFileDetails] = useState({
    fileData: '',
    fileName: '',
    category: ''
  });

  const [fileData, setFileData] = useState();
  const [category, setCategory] = useState();
  const fileRef = useRef();

  const [imageDetails, setImageDetails] = useState(getDetails());

  function handleChange(event) {
    const file = event.target.files[0];

    if (file) {

      let fileCategory = "";
      if (file.name.includes('pdf')) {
        fileCategory = 'pdf';
      }
      else if (isValidImage(file.name)) {
        fileCategory = 'image';
      }
      else {
        alert('Only image and pdf are allowed!');
        setFileDetails({
          fileData: '',
          fileName: '',
          category: ''
        });

        fileRef.current.value = '';
        return;
      }

      const reader = new FileReader();
      reader.onload = function (e) {
        const imageDataUrl = e.target.result;
        setFileDetails((prevDetails) => (
          {
            ...prevDetails,
            fileData: imageDataUrl,
            fileName: file.name,
            category: fileCategory
          }
        ));
      };

      reader.readAsDataURL(file);
    }
  }

  function updateDetails() {
    setImageDetails(getDetails());
  }

  function isValidImage(fileName) {
    const validUrl = ['.jpg', '.jpeg', '.png'];
    let isValid = false;
    for (let extension of validUrl) {
      isValid = fileName.includes(extension);
      if (isValid) {
        break;
      }
    }

    return isValid;
  }

  function uploadHandler() {

    const payload = {
      fileName: fileDetails.fileName,
      fileData: fileDetails.fileData,
      category: fileDetails.category
    }

    saveDetails(payload);

    updateDetails();
    setFileDetails({
      fileData: '',
      fileName: '',
      category: ''
    });

    fileRef.current.value = '';

  }

  function previewDataSetter(fileData, category) {
    setFileData(fileData);
    setCategory(category);
  }

  return (
    <>
      <div className='container border-1'>
        <label>Select Your File</label>
        <input ref={fileRef} type="file" onChange={handleChange} accept='.png, .jpg, .jpeg, .pdf' />
        {fileDetails.fileData && <button onClick={uploadHandler}>Upload</button>}
      </div>
      <div>
        <List details={imageDetails} updateDetails={updateDetails} previewDataSetter={previewDataSetter}>
          {category === 'image' && <img src={fileData} style={{ height: "300px", width: "300px" }} />}
          {category === 'pdf' && <iframe src={fileData} style={{ height: "300px", width: "300px" }} />}
        </List>
      </div>
    </>
  )
}

export default ImageProj
