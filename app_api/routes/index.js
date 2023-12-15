const express = require('express');

const router = express.Router();
const ctrlLogin = require('../controllers/login');
const ctrlMain = require('../controllers/main');
const ctrlRegister = require('../controllers/register');

router
 .route('/login')
 .get(ctrlLogin.loginGet)
 .post(ctrlLogin.loginPost);

router
 .route('/main/:movielistid')
 .get(ctrlMain.movieGetOne)
 .put(ctrlMain.movieUpdateOne);

router
    .route('/main')
    .post(ctrlMain.createMovie);
    
router
 .route('/register')
 .get(ctrlRegister.registerGet)
 .post(ctrlRegister.registerPost);

 module.exports = router;



