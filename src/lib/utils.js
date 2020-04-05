async function uploadFile(data = {}) {
    const response = await fetch("http://localhost:3000/upload", {
        method: "POST",
        contentType: "multipart/form-data",
        body: data,
    });

    return await response.json();
}

async function deleteFile(filename) {
    const response = await fetch(`http://localhost:3000/delete/${filename}`, {
        method: "DELETE",
    });

    return await response.json();
}

export { uploadFile, deleteFile };
