import React from 'react'
import { deleteDetails } from '../services/pdfServices'

function List({details}) {

    function deleteHandler(id) {
        console.log("delete is clicked");
        deleteDetails(id);
    }

    function previewHandler() {
        console.log("preview clicked");
    }

  return (
    <div>
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
            {details.map((detail) =>(
                <tr key={detail.id}>
                    <td>{detail.fileName}</td>
                    <td>{detail.uploadTime}</td>
                    <td><button onClick={() => previewHandler()}>Preview</button></td>
                    <td><button onClick={() => deleteHandler(detail.id)}>Delete</button></td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default List
