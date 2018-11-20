const queryConditions = require('../factories/v1/queryConditions');

module.exports = (req, res, next) => {
    let caseType = null;
    Object.entries(queryConditions).forEach(([key, value]) => {
        Object.entries(value).forEach(([k, v]) => {
            if(res.locals.record[k] === v) {
                caseType = key;
            }
        });
    });
    res.locals.caseType = caseType;
    next();
};
