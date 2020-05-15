const router = require("express").Router();
const bookController = require("../../../controllers/bookController");

// Matches with "api/books"
router
  .route("/")
  .get(bookController.find)
  .post(bookController.create)

// Matches with "api/books/:id"
router
  .route("/:id")
  .update(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove)

module.exports = router;
