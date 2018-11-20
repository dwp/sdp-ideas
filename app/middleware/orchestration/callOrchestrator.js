const OrchestratorBody = require('../../factories/OrchestratorBody');
const OrchestratorService = require('../../services/OrchestratorService');
const config = require('../../config/main');
const redirects = require('../../controllers/redirects');

module.exports = async (req, res, next) => {
    const orchestratorBody = new OrchestratorBody(req, req.signedCookies[config.session.cookieName]);
    const orchestratorService = new OrchestratorService(orchestratorBody);
    try {
        const response = await orchestratorService.call();
        res.locals.orchestratorResponse = response.body;
        return next();
    } catch(error) {
        console.log(error);
        return redirects.goneWrong(req, res);
    }

};
