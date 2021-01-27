const BASEURL = ""; //Reducted. Originally, it pointed to an external API
const PORT = 3001;
const ROUTES = [
    { method: "get", path: "/schools"},
    { method: "post", path: "/teachers"},
];
const REQUESTHEADERS = {
	'Content-Type': 'application/json',
	'Authorization': ''
}
const TEACHERVALIDATOR = {
	firstName: {
		required: true
	},
	lastName: {
		required: true
	},
	schoolCode: {
		required: true,
		allowed: []
	}
}

module.exports = {
	PORT,
	BASEURL,
	ROUTES,
	REQUESTHEADERS,
	TEACHERVALIDATOR
}