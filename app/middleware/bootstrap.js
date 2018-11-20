const requireDir = require('require-dir');
const globals = requireDir('./globals');
const routes = require('../routes/routes');

module.exports = (app) => {
    globals.helmet(app);
    globals.static(app);
    globals.trustProxy(app);
    globals.serveFavicon(app);
    globals.nunjucks(app);
    globals.fileParser(app);
    globals.cookieParser(app);
    globals.bodyParser(app);
    app.use(globals.defineActiveView);
    routes(app);
    app.use(globals.errorHandler);
    globals.setGlobals(app);
    return app;
};
