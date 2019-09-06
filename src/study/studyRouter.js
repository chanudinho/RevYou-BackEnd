const router = require('express').Router();
const multer = require('multer');
const studyController = require('./studyController');
const upload = multer({ dest: 'temp/'});

const studyRouter = () =>{
    
    router.route('/')
    .get(studyController.getSimilarity)
    .put(studyController.updateDuplicateStudy)
    .post(upload.any(), studyController.importStudies);

    router.route('/:ProjectId')
    .get(studyController.getStudies)

    router.route('/specificStudy/:id')
    .get(studyController.getStudy)

    router.route('/duplicates/:ProjectId')
    .get(studyController.getDuplicateStudy)
    
    return router;
}

module.exports = studyRouter;