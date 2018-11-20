const redirects = require('../../controllers/redirects');

module.exports = (err, req, res, next) => {
    console.log(err);
    return redirects.goneWrong(req, res);
};
