const SchoolManager = require('../3_dataaccess/schoolManager');

async function getSchools(options) {
    let schoolData = await SchoolManager.getSchools(options);

    return await processSchools(schoolData, options.query);
}

async function processSchools(allSchools, query) {
    let filteredSchools = await filterSchools(allSchools, query);

    filteredSchools = await sortSchools(filteredSchools, query);

    return filteredSchools;
}

function filterSchools(allSchools, query) {
    return new Promise((resolve) => {
        if (Object.keys(query).length === 0) resolve(allSchools);
        else {
            let result = [];
    
            loop1:
            for (let i = 0; i < allSchools.length; i++) {
                let school = allSchools[i];

                loop2:
                for (let j = Object.keys(query).length - 1; j >= 0 ; j--) {
                    let param = Object.keys(query)[j];

                    if ((Array.isArray(query[param]) && query[param].includes(school[param])) || school[param] === query[param]) {
                        result.push(school);
                        break loop2;
                    }
                }
            }
    
            resolve(result);
        }
    })
}

function sortSchools(schools, query) {
    return new Promise((resolve) => {
        for (let i = Object.keys(query).length - 1; i >= 0; i--) {
            let param = Object.keys(query)[i];
    
            schools.sort((a,b) => {
                if (a[param] > b[param]) return 1;
                if (a[param] < b[param]) return -1;
                return 0;
            })
        }

        resolve(schools);
    })
}

module.exports = {
    getSchools
}