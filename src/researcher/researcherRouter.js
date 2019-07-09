const router = require('express').Router();
const researcherController = require('../researcher/researcherController');

const researcherRouter = () => {
    router.route('/')
    .post(researcherController.createResearcher);

    router.route('/:email')
    .get(researcherController.getResearcher)
    .put(researcherController.updateResearcher)
    .delete(researcherController.deleteResearcher);
    
    router.route('/myprojects/:email')
    .get(researcherController.getProjectsResearcher);

    return router;
}


module.exports = researcherRouter;