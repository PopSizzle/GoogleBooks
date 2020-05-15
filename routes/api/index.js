const router = require("express").Router();
const Books = require("./books");
const Google = require("./google");

// routes to db tables
router.use("/books", Books);

// route to get books from google API
router.use("/google", Google);
module.exports = router;