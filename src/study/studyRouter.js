const router = require('express').Router();
const multer = require('multer');
const studyController = require('./studyController');

const upload = multer({ dest: 'temp/' });

const studyRouter = () => {
  router
    .route('/')
    .get(studyController.getSimilarity)
    .put(studyController.updateDuplicateStudy)
    .post(upload.any(), studyController.importStudies);

  router
    .route('/specificStudy/:id')
    .get(studyController.getStudy)
    .put(studyController.updateStudy);

  router.route('/duplicates/:ProjectId').get(studyController.getDuplicateStudy);

  router.route('/findStudies').get(studyController.findStudies);

  router
    .route('/:ProjectId')
    .get(studyController.getStudies)
    .post(studyController.createStudy);

  return router;
};

module.exports = studyRouter;
