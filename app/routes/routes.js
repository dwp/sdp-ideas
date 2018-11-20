const renders = require('../controllers/renders');
const redirects = require('../controllers/redirects');

const setUserId = require('../middleware/setUserId');

const v1FilterRecords = require('../controllers/v1/filterRecords');
const v1findRecordById = require('../controllers/v1/findRecordById');
const determineCaseType = require('../middleware/determineCaseType');
const setListTypeToAll = require('../middleware/setListTypeToAll');
const findNextCaseOfType = require('../middleware/findNextCaseOfType');

const isValidLogin = require('../middleware/isValidLogin');
const hasValidToken = require('../middleware/hasValidToken');
const setSessionToken = require('../middleware/setSessionToken');


module.exports = (app) => {
    app.get('/', renders.index);
    app.get('/errors/404', renders.notFound);
    app.get('/errors/somethings-gone-wrong', renders.goneWrong);

    // version TMS
    app.get('/version-1/login', renders.v1Login);
    app.post('/version-1/login', [isValidLogin, setSessionToken, redirects.v1Dashboard]);
    app.get('/version-1/dashboard', [hasValidToken, setUserId, v1FilterRecords, renders.v1Dashboard]);
    app.get('/version-1/listview', [hasValidToken, setUserId, v1FilterRecords, renders.v1ListView]);
    app.get('/version-1/record/:id', [hasValidToken, setUserId, v1findRecordById, determineCaseType, renders.v1Record]);
    app.post('/v1-sidebar-search', redirects.v1Dashboard);

    // version 2
    app.get('/version-2/login', renders.v2Login);
    app.post('/version-2/login', [isValidLogin, setSessionToken, redirects.v2ListView]);
    app.get('/version-2/listview', [hasValidToken, setUserId, setListTypeToAll, v1FilterRecords, renders.v2ListView]);
    app.get('/version-2/record/:id', [hasValidToken, setUserId, v1findRecordById, determineCaseType, renders.v2Record]);
    app.post('/v2-sidebar-search', redirects.v2ListView);

    // version 2
    app.get('/version-3/login', renders.v3Login);
    app.post('/version-3/login', [isValidLogin, setSessionToken, redirects.v3Dashboard]);
    app.get('/version-3/dashboard', [hasValidToken, setUserId, v1FilterRecords, renders.v3Dashboard]);
    app.get('/version-3/record', [hasValidToken, findNextCaseOfType, redirects.v3Record]);
    app.get('/version-3/record/:id', [hasValidToken, setUserId, v1findRecordById, determineCaseType, renders.v3Record]);
    app.post('/v3-sidebar-search', redirects.v3Dashboard);


    app.all('*', redirects.notFound);
    return app;
};
