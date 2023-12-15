const mongoose = require('mongoose');
const movielist = mongoose.model('MovieList');


const loginGet = function(req, res) {
    res
        .status(200)
        .json({"status" : "success"});
    };

const loginPost = function(req, res) {
res
    .status(200)
    .json({"status" : "success"});
};

module.exports = {
    loginGet,
    loginPost  
};