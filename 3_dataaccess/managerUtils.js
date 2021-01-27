require('dotenv').config();
const CONFIG = require('../config');
const axios = require('axios');

async function sendRequest(request) {
    request.headers = Object.assign({}, CONFIG.REQUESTHEADERS);
    request.headers['Authorization'] = process.env['TOKEN'];

    let response = await axios(request);

    if (response && response.data && response.status === 200) {
        return response.data;
    }
    else {
        throw response;
    }
}

module.exports = {
    sendRequest
}