
module.exports = {
    get: function (req, res) {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.query.q)
        .then(books => {
            res.json(books);
        }
);
}
};