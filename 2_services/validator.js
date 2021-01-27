function validate(config, data) {
    return new Promise((resolve, reject) => {
        try {
            for (let key in config) {
                for (let prop in config[key]) {
                    switch (prop) {
                        case 'required':
                            if (!data[key]) throw `'${key}' must be present.`;
                            break;
                        case 'allowed':
                            if (!isAllowed(data[key], config[key][prop])) throw `'${data[key]}' is not an allowed value. Allowed range: ${config[key][prop]}.`;
                            break;
                        default:
                            break;
                    }
                }
            }

            resolve();
        } 
        catch (error) {
            reject(error);
        }
    })
}

function isAllowed(data, allowed) {
    if (Array.isArray(allowed)) {
        return allowed.includes(data);
    }
    else {
        return true;
    }
}

module.exports = {
    validate
}