const router = require('express').Router();
const languageController = require('./languageController');

const languageRouter = () => {
    router.route('/')
    .post(languageController.createLanguage);

    router.route('/:ProjectId')
    .get(languageController.getLanguages);

    router.route('/createAssociation')
    .post(languageController.createProjectsLanguages)

    return router;
}


module.exports = languageRouter;