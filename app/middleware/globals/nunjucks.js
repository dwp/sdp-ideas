const path = require('path');
const nunjucks = require('nunjucks');
const isDevEnvironment = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'testing';

module.exports = (app) => {

    app.set('view engine', 'njk');
    let nunjucksEnv = nunjucks.configure(path.join(__dirname, '../../views'), {
        autoescape: true,
        express: app,
        noCache: isDevEnvironment,
        watch: isDevEnvironment
    });

    nunjucksEnv.addFilter('asDateString', (date) => {
        if(date === null || date === undefined) {
            return;
        }
        date = new Date(date);
        let formedDate = `${date.getDate()}/${date.getMonth() + 1 }/${date.getFullYear()}`;
        return formedDate;
    });

    nunjucksEnv.addFilter('toUpper', (string) => {
        if(string === null || string === undefined || typeof string !== 'string') {
            return;
        }
        return string.toUpperCase();
    });


};
