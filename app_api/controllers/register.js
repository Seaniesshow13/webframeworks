const mongoose = require('mongoose');
const movielist = mongoose.model('MovieList');

const registerGet = function (req, res) {
    res.status(200)
    .json({"status" : "success"});
};
const registerPost = function(req, res) {
    res.status(200)
    .json({"status" : "success"});
};

module.exports = {
    registerGet,
    registerPost
};