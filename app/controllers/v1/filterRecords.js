const acceptedListTypes = require('../../helpers/v1/acceptedListTypes');
const queryConditions = require('../../factories/v1/queryConditions');
const data = require('../../data/sdp-records');

module.exports = (req, res, next) => {
    let queries = [];
    let countOnly = false;
    let records = [];
    let counts = {};
    if(res.locals.activeView === 'listview') {
        res.locals.records = [];
        if(!acceptedListTypes.includes(req.query.listType)) {
            return next();
        }
        queries.push(req.query.listType);
        res.locals.listType = req.query.listType;
    } else if(res.locals.activeView === 'dashboard') {
        queries.push(...acceptedListTypes);
        countOnly = true;
    } else {
        return next();
    }
    queries.forEach((query) => {
        let reducedRecords = JSON.parse(JSON.stringify(data));
        Object.entries(queryConditions[query]).forEach(([key, value]) => {
            reducedRecords = reducedRecords.filter(x => x[key] === value);
        });
        if(countOnly) {
            counts[query] = reducedRecords.length;
        } else {
            records = reducedRecords;
        }
    });
    res.locals.records = records;
    res.locals.counts = counts;
    return next();
};
