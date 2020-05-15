const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3100;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// due to the where the public folder ends up after compiling,
// this is where your public static files end up
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// routes
app.use(routes);

// connect to mongo~
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// start server
app.listen(PORT, () => console.log("Server listening on port: " + PORT))