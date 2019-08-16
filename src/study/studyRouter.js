const router = require('express').Router();
const multer = require('multer');
const studyController = require('./studyController');
const upload = multer({ dest: 'temp/'});

const studyRouter = () =>{

    router.route('/:ProjectId')
    .get(studyController.getStudies)
    .post(upload.any(), studyController.importStudies);

    router.route('/specificStudy/:id')
    .get(studyController.getStudy)
    
    return router;
}

module.exports = studyRouter;