const path = require('path');
const favicon = require('serve-favicon');

module.exports = (app) => app.use(favicon(path.join(__dirname, '../../assets/images', 'favicon.ico')));
