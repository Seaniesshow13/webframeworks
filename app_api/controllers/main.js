const mongoose = require('mongoose');
const movielist = mongoose.model('MovieList');


const movieGetOne = function (req, res) {
    if (req.params && req.params.movielistid){
    movielist
       .findById(req.params.movielistid)
       .then((movielist,err) => {
        if (!movielist) {
            res
                .status(404)
                .json({"message": "movieID not found"});
            return;
        } else if (err) {
            res
                .status(404)
                .json(err);
            return;
        }
            res
            .status(200)
            .json(movielist);
});
}else {
    res 
        .status(404)
        .json({"messgage" : "no ID in request"})
}};


const mainPost = function(req, res) {
    res.status(200)
    .json({"status" : "success"});
};

const movieUpdateOne = function(req, res) {
    res.status(200)
    .json({"status" : "success"});
};

const mainGet = function(req, res) {
    res.status(200)
    .json({"status" : "success"});
};

const createMovie = function (req, res){
    movielist.create ({
    name: req.body.name,
    rating: req.body.rating,
    cast: req.body.cast.split(","),
    directors: req.body.directors.split(","),
    runtime: parseFloat(req.body.runtime),
    }, (err,movielist) => {
        if (err) {
            res
                .status(400)
                .json(err);
        }else {
            res 
                .status(201)
                .json(movielist)
    }
});
};

module.exports = {
    mainGet,
    mainPost,
    movieGetOne,
    movieUpdateOne,
    createMovie
};