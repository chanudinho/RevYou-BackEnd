const router = require('express').Router();
const invitationController = require('../invitation/invitationController');

const invitationRouter = () => {
    router.route('/')
    .post(invitationController.createInvitation);

    router.route('/:id')
    .put(invitationController.updateSituation)
    .delete(invitationController.deleteInvitation);

    return router;
}


module.exports = invitationRouter;