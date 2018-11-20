const data = require('../data/sdp-records');
const queryConditions = require('../factories/v1/queryConditions');

module.exports = (req, res, next) => {
    const recordType = req.query.recordType;
    let located = false;
    if(recordType === 'other') {
        res.locals.recordId = data[0].id;
        return next();
    }
    const queryType = queryConditions[recordType];
    data.forEach((record) => {
        if(!located) {
            Object.entries(queryType).forEach(([key, value]) => {
                if(record[key] === value) {
                    res.locals.recordId = record.id;
                    located = true;
                }
            });
        }
    });
    return next();
};
