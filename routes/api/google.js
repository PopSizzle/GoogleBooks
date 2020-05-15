const router = require("express").Router();
const bookController = require("../../../controllers/bookController");

    
    // Get Google books
   router.get("/google", function(req, res) {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.query.q);
    }).then(function(books){
        res.json(books);
    })

    module.exports = router;