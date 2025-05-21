import { useRef, useState } from 'react';
import { saveDetails, getDetails } from '../../services/PdfServices.js'
import List from '../List';

function PdfProj() {

  const [fileData, setFileData] = useState();
  const fileRef = useRef();

  const [fileDetails, setFileDetails] = useState({
    fileData: '',
    fileName: '',
  });

  const [PdfDetails, setPdfDetails] = useState(getDetails());

  function handleChange(event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const pdfDataUrl = e.target.result;
        setFileDetails((prevDetails) => (
          {
            ...prevDetails,
            fileData: pdfDataUrl,
            fileName: file.name
          }
        ));
      };

      reader.readAsDataURL(file);
    }
  }

  function updateDetails() {
    setPdfDetails(getDetails());
  }

  function uploadHandler() {

    const payload = {
      fileName: fileDetails.fileName,
      fileData: fileDetails.fileData
    }

    saveDetails(payload);
    setFileDetails({
      fileData: '',
      fileName: '',
    });

    updateDetails();
    fileRef.current.value = '';

  }

  function previewDataSetter(fileData) {
    setFileData(fileData);
  }

  return (
    <>
      <div className='container border-1'>
        <label>Select Resume</label>
        <input ref={fileRef} type="file" onChange={handleChange} />
        {fileDetails.fileData && <button onClick={uploadHandler}>Upload</button>}
      </div>
      <div>
        <List details={PdfDetails} updateDetails={updateDetails} previewDataSetter={previewDataSetter} >
          <iframe src={fileData} style={{ height: "300px", width: "300px" }} />
        </List>
      </div>
    </>
  )
}

export default PdfProj
