const path = require("path");
const router = require("express").Router();
const api = require("./api")

// api routes
router.use("/api", api);

// send react app
// we need to send the client the compiled index.html file
if (process.env.NODE_ENV === "production") {
  router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
  })
}

module.exports = router;