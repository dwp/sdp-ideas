const data = require('../../data/sdp-records');
const redirects = require('../redirects');

module.exports = (req, res, next) => {
    let record = data.filter(x => x.id === req.params.id);
    if(record.length === 0) {
        return redirects.v1ListView(req, res);
    }
    res.locals.record = record[0];
    return next();
};
