module.exports = (req, res, next) => {
    if(!req.method === 'GET') {
        return next();
    }
    let urlParts = req.originalUrl.split('/');
    res.locals.activeView = urlParts.pop().split('?')[0];
    return next();
};
