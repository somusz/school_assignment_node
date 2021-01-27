const Utils = require('./managerUtils');

async function getTeacher(options) {
    return await Utils.sendRequest(options);
}

async function postTeacher(options) {
    return await Utils.sendRequest(options);
}

module.exports = {
    getTeacher,
    postTeacher
}