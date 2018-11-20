const config = require('../../config/main');

module.exports = (res, name, content) => {
    res.cookie(name, content, {
        maxAge: config.session.cookieLifespan,
        httpOnly: true,
        signed: true,
        secure: true
    });
};
