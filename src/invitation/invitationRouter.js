const router = require('express').Router();
const invitationController = require('../invitation/invitationController');

const invitationRouter = () => {
    router.route('/')
    .post(invitationController.createInvitation);

    return router;
}


module.exports = invitationRouter;