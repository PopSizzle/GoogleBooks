const router = require("express").Router();
const googleController = require("../../controllers/googleController");

    // Get Google books
    router
        .route("/google")
        .get(googleController.get);

    module.exports = router;