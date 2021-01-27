const Utils = require('../2_services/serviceUtils');

function welcome(request, response) {
    let welcomeMessage = Utils.getWelcomeMessage();
    
    response.send(welcomeMessage);
}

module.exports = {
    welcome
}