const router = require('express').Router();
const projectController = require('../project/projectController');

const projectRouter = () => {
    router.route('/')
    .post(projectController.createProject);

    router.route('/:id')
    .delete(projectController.deleteProject);

    router.route('/inviteresearcher')
    .post(projectController.inviteResearcher);
    
    router.route('/inviteds/:ProjectId')
    .get(projectController.getInvited);

    return router;
}


module.exports = projectRouter;