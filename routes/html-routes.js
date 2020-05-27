var db = require("../models");
var path = require("path");

module.exports = function (app) {

    if (process.env.NODE_ENV === "production") {
        app.use(function (req, res) {
            res.sendFile(path.join(__dirname, "../client/build/index.html"))
        })
    }
}