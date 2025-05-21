import { useState } from 'react'
import { deleteDetails } from '../services/ImageServices'
import Modal from './Modal';

function List({ details, updateDetails, previewDataSetter, children, file }) {
  const [fileData, setFileData] = useState(null);

  function deleteHandler(id) {
    deleteDetails(id);
    updateDetails();
  }

  function previewHandler(fileData, category) {
    previewDataSetter(fileData, category)
    setFileData(fileData)
  }

  return (
    <div>
      <Modal isOpen={!!fileData}>
        {children}
        <button onClick={() => setFileData(null)}>Close</button>
      </Modal>
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
              <td><button onClick={() => previewHandler(detail.fileData, detail.category)}>Preview</button></td>
              <td><button onClick={() => deleteHandler(detail.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default List
