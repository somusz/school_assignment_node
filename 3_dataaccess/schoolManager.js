const Utils = require('./managerUtils');

async function getSchools(options) {
    return await Utils.sendRequest(options);
}

module.exports = {
    getSchools
}