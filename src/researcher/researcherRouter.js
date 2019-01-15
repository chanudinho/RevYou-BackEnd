const router = require('express').Router();
const researcherController = require('../researcher/researcherController');

const researcherRouter = () => {
    router.route('/')
    .post(researcherController.createResearcher);

    return router;
}


module.exports = researcherRouter;