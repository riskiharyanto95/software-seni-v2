/**
* /routes/home.js
*/
var express = require('express');
var router = express.Router();

/**
* call controller
*/
var homeController = require('../controllers/home');

/**
* router
*/
router.get('/', homeController.index);

module.exports = router;