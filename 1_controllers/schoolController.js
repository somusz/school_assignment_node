const SchoolService = require('../2_services/schoolService');
const Utils = require('../2_services/serviceUtils');

async function getSchools(request, response) {
    try {
        let input = Utils.getOptions(request);
        
        let output = await SchoolService.getSchools(input);

        response.send(output);
    } 
    catch (error) {
        let status = error.status || 400;
        let message = error.message || "Something went wrong."

        response.status(status).send(message);
    }
}

module.exports = {
    getSchools
}