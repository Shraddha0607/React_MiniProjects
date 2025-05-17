import { useState } from 'react'
import PdfPreview from './PdfPreview'
import PdfReactPdf from './PdfReactPdf';

function PdfProj() {
  const [file, setFile] = useState();
  const [isOpen, setIsOpen] = useState(false);

  function getPreviewHandler() {
    setIsOpen(true);
  }

  function onChangeHandler(event) {
    setFile(event.target.files[0]);
  }

  return (
    <div>
      <br/>
      <PdfReactPdf />
      <div>
        {/* <iframe src="https://drive.google.com/file/d/1Fe8fZELXDTeWMXpZCrt8fVQbpkPK60R1/preview" width="640" height="480" allow="autoplay"></iframe> */}
        {/* <embed src="https://drive.google.com/file/d/1Fe8fZELXDTeWMXpZCrt8fVQbpkPK60R1/preview" width="640" height="480" allow="autoplay"></embed> */}

      </div>
      {/* <div>
        <label>Select pdf</label>
        <input type="file" accept=".pdf" onChange={onChangeHandler} />
        {isOpen && <PdfPreview />}
        <button onClick={getPreviewHandler}>Get Preview</button>
      </div> */}
    </div>
  )
}

export default PdfProj
