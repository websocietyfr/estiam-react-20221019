
function request({ url, method, body, customHeaders = {} }) {
    const headers = new Headers({
        'Content-Type': 'application/json',
        ...customHeaders
    });
    
    const init = {
        method: method,
        headers: headers,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(body)
    }

    return fetch(url,init);
}

export default request;