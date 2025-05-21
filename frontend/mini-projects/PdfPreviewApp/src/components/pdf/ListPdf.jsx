import { useState } from 'react'
import { deleteDetails } from '../../services/PdfServices'
import Modal from '../Modal';

function ListPdf({ details, updateDetails }) {
  const [fileData, setFileData] = useState(null);

  function deleteHandler(id) {
    deleteDetails(id)
    updateDetails();
  }

  return (
    <div>
      <Modal isOpen={!!fileData}>
        
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
              <td><button onClick={() => setFileData(detail.fileData)}>Preview</button></td>
              <td><button onClick={() => deleteHandler(detail.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListPdf
