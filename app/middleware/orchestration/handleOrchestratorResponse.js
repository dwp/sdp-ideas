const redirects = require('../../controllers/redirects');
const assignCookie = require('../../helpers/cookies/assign');
const clearCookie = require('../../helpers/cookies/clear');
const config = require('../../config/main');

module.exports = (req, res, next) => {
    let response = res.locals.orchestratorResponse;
    if(response.isAuthorised) {
        assignCookie(res, config.session.cookieName, response.token);
        res.locals.data = response.data;
        if(res.locals.data && res.locals.data.records && res.locals.data.records.length === 1) {
            res.locals.recordId = res.locals.data.records[0].id;
        }
        return next();
    } else {
        return redirects.index(req, res);
    }
};
