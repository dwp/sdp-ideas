const renders = require('../controllers/renders');

module.exports = (req, res, next) => {
    if(req.body.email !== process.env.EMAIL || req.body.password !== process.env.PASSWORD) {
        let version = `${req.url.split('/')[1][0]}${req.url.split('/')[1].slice(-1)}`;
        res.locals.errors = true;
        return renders[`${version}Login`](req, res);
    }
    return next();
};
