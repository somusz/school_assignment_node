const CONFIG = require('../config');

function getWelcomeMessage() {
    return `
    <h2>
        Welcome to Assignment - Task 2
    </h2>
    <br />
    <h3>
        Use one of the following routes in your request: <br />
        <ul>
            ${CONFIG.ROUTES.map((r) => `<li>${r.method.toUpperCase()}: ${r.path}</li>`).join("")}
        </ul>
    </h3>`;
}

function getOptions(request) {
    const baseURL = CONFIG.BASEURL;
    const { method, route, body, query, data } = request;
    const path = (route && route.path) ? route.path : "";

    let url = `${baseURL}${path}`;

    let options = { method, url };
    
    if (['get'].includes(method.toLowerCase()))
        options.query = query || {};

    if (['post', 'update', 'put'].includes(method.toLowerCase()))
        options.data = body || data || {};

    return options;
}

module.exports = {
    getWelcomeMessage,
    getOptions,
}