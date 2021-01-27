const CONFIG = require('../config');
const TeacherManager = require('../3_dataaccess/teacherManager');
const SchoolService = require('../2_services/schoolService');
const Validator = require('./validator');
const Utils = require('./serviceUtils');

async function getTeacher(options) {
    return await TeacherManager.getTeacher(options);
}

async function returnTeacher(id) {
    const requestConfig = {
        method: 'get',
        route: { path: `/teachers/${id}` },
    }

    const request = Utils.getOptions(requestConfig);

    return await getTeacher(request);
}

async function postTeacher(options) {
    await validateTeacher(options.data);

    let response = await TeacherManager.postTeacher(options);

    if (!response || !response.details || !response.details.id) throw "The teacher has been created but the server has not responded with a valid id."

    return await returnTeacher(response.details.id);
} 

async function validateTeacher(teacher) {
    let config = Object.assign({}, CONFIG.TEACHERVALIDATOR);

    config.schoolCode.allowed = await getValidSchoolCodes();

    await Validator.validate(config, teacher);
}

async function getValidSchoolCodes() {
    const requestConfig = {
        method: 'get',
        route: { path: '/schools' },
    }

    const schoolRequest = Utils.getOptions(requestConfig);

    const schools = await SchoolService.getSchools(schoolRequest);
    
    const validSchoolCodes = schools.map((s) => s.schoolCode);

    return validSchoolCodes;
}

module.exports = {
    postTeacher
}