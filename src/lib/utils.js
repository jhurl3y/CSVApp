async function uploadFile(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        contentType: "multipart/form-data",
        body: data,
    });

    return await response.json();
}

export { uploadFile };
