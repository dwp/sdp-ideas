module.exports = (req, res, next) => {
    req.query.listType = req.query.listType || 'other';
    next();
};
