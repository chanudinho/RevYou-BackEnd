const router = require('express').Router();
const researcherController = require('../researcher/researcherController');

const researcherRouter = () => {
    router.route('/')
    .post(researcherController.createResearcher);

    router.route('/updateResearcher/:id')
    .put(researcherController.updateResearcher);

    router.route('/:email')
    .get(researcherController.getResearcher)
    .delete(researcherController.deleteResearcher);
    
    router.route('/myprojects/:email')
    .get(researcherController.getProjectsResearcher);

    return router;
}


module.exports = researcherRouter;