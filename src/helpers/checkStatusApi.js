export default response => {
    if (response.status >= 400) {
        return response.text().then(text => {
            throw new Error(text || response.statusText);
        })
    }
    return Promise.resolve(response.json())
};