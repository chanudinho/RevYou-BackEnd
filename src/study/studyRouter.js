const router = require('express').Router();
const studyController = require('./studyController');

const studyRouter = () =>{

    router.route('/')
    .post(studyController.createStudy);
    
    return router;
}

module.exports = studyRouter;