const TeacherService = require('../2_services/teacherService');
const Utils = require('../2_services/serviceUtils');

async function postTeacher(request, response) {
    try {
        let input = Utils.getOptions(request);

        let output = await TeacherService.postTeacher(input);
    
        response.send(output);
    } 
    catch (error) {
        let status = error.status || 400;
        let message = typeof error === 'string' ? error : error.message || "Something went wrong.";

        response.status(status).send(message);
    }

}

module.exports = {
    postTeacher
}