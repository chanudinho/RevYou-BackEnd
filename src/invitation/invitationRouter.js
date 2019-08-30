const router = require('express').Router();
const invitationController = require('../invitation/invitationController');

const invitationRouter = () => {
    router.route('/')
    .post(invitationController.createInvitation);

    router.route('/:id')
    .put(invitationController.updateSituation)
    .delete(invitationController.deleteInvitation);

    router.route('/teste/:ProjectId')
    .get(invitationController.getInvitationAccept);

    return router;
}


module.exports = invitationRouter;