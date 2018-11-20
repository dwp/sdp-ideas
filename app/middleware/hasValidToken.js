const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    let token = req.cookies.sdp_designs;
    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if(err) {
                return res.redirect('/');
            } else {
                res.locals.userToken = decodedToken;
                // extend cookie timer - only if has existing token
                if(req.signedCookies.sdp_designs) {
                    res.cookie('sdp_designs', token, { maxAge: config.cookieLifespan });
                }
                next();
            }
        });
    } else {
        console.log('no valid token found');
        // There's no token
        return res.redirect('/');
    }
};
