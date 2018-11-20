const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    let claims = {
        sub: 'bob',
        iss: 'something',
        permissions: 'none'
    };

    // Sign the token, async
    jwt.sign(claims, process.env.JWT_SECRET, {expiresIn: 36000}, (err, createdToken) => {
        if(err) {
            console.log(err);
            res.redirect('/errors/somethings-gone-wrong');
        } else {
        // Send the the token in a cookie
            res.cookie('sdp_designs', createdToken, { maxAge: 36000000 });
            next();
        }
    });
};
