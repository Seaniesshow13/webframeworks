const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlLogin = require('../controllers/login');
const ctrlRegister = require('../controllers/register');


router.get('/main', ctrlMain.movielist);
router.get('/', ctrlLogin.loginPage);
router.get('/register', ctrlRegister.registerPage);



module.exports = router;