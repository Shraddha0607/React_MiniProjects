
const KeyImage = "ImagePreviewApp"

export function getDetails() {
    const stored = localStorage.getItem(KeyImage);
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

    localStorage.setItem(KeyImage, JSON.stringify(existing));

};

export function deleteDetails (id){
    const stored = getDetails();
    const updated = stored.filter(details => details.id !== id);

    localStorage.setItem(KeyImage, JSON.stringify(updated));
}

function generateDate() {

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const DateValue = `${day}-${month}-${year}`;


    return DateValue;
}