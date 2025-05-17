import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set the worker source for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = "https://drive.google.com/file/d/1Fe8fZELXDTeWMXpZCrt8fVQbpkPK60R1/preview";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PdfReactPdf({ src }) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1); // Reset to the first page when the document loads
  }

  function nextPage() {
    setPageNumber((prev) => Math.min(prev + 1, numPages ?? prev));
  }

  function prevPage() {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  }

  return (
    <div style={{ textAlign: 'center', padding: 20 }}>
      <div>
        <button onClick={prevPage} disabled={pageNumber <= 1}>
          Previous
        </button>
        <button onClick={nextPage} disabled={pageNumber >= (numPages ?? 0)}>
          Next
        </button>
      </div>

      <Document file={src} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>

      <p>
        Page {pageNumber} of {numPages ?? '--'}
      </p>
    </div>
  );
}
