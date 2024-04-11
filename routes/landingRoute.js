const router = require('express').Router();
const {
  aboutController,
  indexRouter,
} = require('controllers/controller');

router.get("/", indexRouter);

router.get("/about", aboutController);

module.exports = router