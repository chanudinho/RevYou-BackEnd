const router = require('express').Router();
const secondaryQuestionController = require('./secondaryQuestionController');

const secondaryQuestionRouter = () => {
    router.route('/')
    .post(secondaryQuestionController.createSecondaryQuestion);

    router.route('/:ProjectId')
    .get(secondaryQuestionController.getSecondaryQuestion);

    router.route('/updateSecondaryQuestion/:id')
    .put(secondaryQuestionController.updateSecondaryQuestion);

    return router;
}


module.exports = secondaryQuestionRouter;