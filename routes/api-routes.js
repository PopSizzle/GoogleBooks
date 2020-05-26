var db = require("../models");
const axios = require("axios");

module.exports = function (app) {

    app.get("/api/books", function(req,res){
        db.Book.findAll({})
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }),

    app.post("/api/books", function(req,res){
        db.Book.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }),

    app.delete("/api/books/:id", function(req,res){
        db.Book.deleteOne( { "_id" : req.params.id } )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }),

    app.get("/api/search/:search", function(req,res){
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.search)
        .then(books => {
            console.log(books.data)
            res.json(books.data);
        })
        .catch(err => {
            console.log(err)
        })
    })


}