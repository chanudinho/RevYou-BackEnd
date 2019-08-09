const router = require('express').Router();
const searchEngineController = require('./searchEngineController');

const searchEngineRouter = () => {
    router.route('/')
    .post(searchEngineController.createSearchEngine);

    router.route('/:ProjectId')
    .get(searchEngineController.getSearchEngines);

    router.route('/createAssociation')
    .post(searchEngineController.createProjectsSearchEngines)

    return router;
}


module.exports = searchEngineRouter;