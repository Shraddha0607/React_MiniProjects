import {useState} from 'react'
import PdfPreview from './PdfPreview'

function PdfProj() {
    const [isOpen, setIsOpen] = useState(false);

    function getPreviewHandler() {
    setIsOpen(true);
  }

  return (
    <div>
       <label>Select pdf</label>
        <input type="file" />
        {isOpen && <PdfPreview />}
        <button onClick={getPreviewHandler}>Get Preview</button>
    </div>
  )
}

export default PdfProj
