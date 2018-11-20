const { cookieName } = require('../../config/main').session;

module.exports = (res, name) => {
    res.clearCookie(name);
    next();
};
