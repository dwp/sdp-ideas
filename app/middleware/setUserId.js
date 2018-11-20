module.exports = (req, res, next) => {
    res.locals.userId = 'Tom Sawyer';
    next();
};
