const router = require("express").Router();
const Books = require("./books");

// routes to db tables
router.use("/books", Books);
module.exports = router;