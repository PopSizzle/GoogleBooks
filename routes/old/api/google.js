const router = require("express").Router();
const googleController = require("../controllers/googleController");

router
  .route("/:search")
  .get(googleController.getSearch);
  

module.exports = router;
