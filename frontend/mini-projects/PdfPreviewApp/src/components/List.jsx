import React, { useState } from 'react'
import { deleteDetails } from '../services/pdfServices'
import ImagePreview from './image/ImagePreview';

function List({ details }) {
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState('');

  function deleteHandler(id) {
    console.log("delete is clicked");
    deleteDetails(id);
  }

  function getPreviewHandler(fileUrl) {
    console.log("preview clicked");
    setIsOpen(true);
    setFile(fileUrl);
  }


  return (
    <div>
      {isOpen && <ImagePreview file={file} />}
      <table>
        <thead>
          <tr>
            <th>FileName</th>
            <th>Uploaded on</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail) => (
            <tr key={detail.id}>
              <td>{detail.fileName}</td>
              <td>{detail.uploadTime}</td>
              <td><button onClick={() => getPreviewHandler(detail.fileUrl)}>Preview</button></td>
              <td><button onClick={() => deleteHandler(detail.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default List
