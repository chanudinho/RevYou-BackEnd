const router = require('express').Router();
const projectController = require('../project/projectController');

const researcherRouter = () => {
    router.route('/')
    .post(projectController.createProject);

    router.route('/inviteresearcher')
    .post(projectController.inviteResearcher);
    /*router.route('/:email')
    .get(researcherController.getResearcher)*/

    return router;
}


module.exports = researcherRouter;