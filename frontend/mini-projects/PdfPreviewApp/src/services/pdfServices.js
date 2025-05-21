const KeyPdf = "PdfPreviewApp"

export function getDetails() {
    const stored = localStorage.getItem(KeyPdf);
    return stored ? JSON.parse(stored) : [];
}

export function saveDetails (value) {
    const existing = getDetails();

    const newEntity = {
        ...value,
        uploadTime: generateDate(),
        id: Date.now()
    }

    existing.push(newEntity);

    localStorage.setItem(KeyPdf, JSON.stringify(existing));

};

export function deleteDetailsPdf (id){
    const stored = getDetails();
    const updated = stored.filter(details => details.id !== id);

    localStorage.setItem(KeyPdf, JSON.stringify(updated));
}

function generateDate() {

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const DateValue = `${day}-${month}-${year}`;

    return DateValue;
}