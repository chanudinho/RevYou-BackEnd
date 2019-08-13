const router = require('express').Router();
const multer = require('multer');
const studyController = require('./studyController');
const upload = multer({ dest: 'temp/'});

const studyRouter = () =>{

    router.route('/')
    .post(upload.any(), studyController.addFile);
    
    return router;
}

module.exports = studyRouter;