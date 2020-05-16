async function uploadFile(data = {}) {
    const response = await fetch(`http://${window.location.host}/upload`, {
        method: "POST",
        contentType: "multipart/form-data",
        body: data,
    });

    return await response.json();
}

async function deleteFile(filename) {
    const response = await fetch(
        `http://${window.location.host}/delete/${filename}`,
        {
            method: "DELETE",
        }
    );

    return await response.json();
}

async function getFileData(filename) {
    const response = await fetch(
        `http://${window.location.host}/get/${filename}`,
        {
            method: "GET",
        }
    );

    return await response.json();
}

export { uploadFile, deleteFile, getFileData };
