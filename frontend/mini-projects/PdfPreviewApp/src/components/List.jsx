import { useState } from 'react'
import { deleteDetails } from '../services/pdfServices'
import Modal from './Modal';

function List({ details }) {
  const [fileData, setFileData] = useState(null);

  return (
    <div>
      <Modal isOpen={!!fileData}>
        <img src={fileData} style={{ height: "300px", width: "300px" }} />
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
              <td><button onClick={() => deleteDetails(detail.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default List
