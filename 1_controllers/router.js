"use strict";

const express = require('express');
const router = express.Router({ mergeParams: true });
const RootController = require('./rootController');
const SchoolController = require('./schoolController');
const TeacherController = require('./teacherController');

module.exports = () => {
	router.get('/', RootController.welcome); 

	router.get('/schools', SchoolController.getSchools);

	router.post('/teachers', TeacherController.postTeacher);

	return router;
}