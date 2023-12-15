const mongoose = require('mongoose');
const dbURI = "mongodb+srv://User:12345@cluster0.kbvp3f7.mongodb.net/"

try {

mongoose.connect(dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true}).then(
        () => {console.log(" Mongoose is connected")},
        err=> {console.log(err)}
        );
}
 catch (e){
    console.log("Could not connect");
 }require('./movie');