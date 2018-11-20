module.exports = {
    csv: (req, file, callback) => {
        if(file.mimetype !== 'text/csv') {
            callback(null, false);
        } else {
            callback(null, true);
        }
    }
};
