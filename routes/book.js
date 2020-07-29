/**
* /routes/book.js
*/
var express = require('express');
var router = express.Router();

/**
* call controller
*/
var bookController = require('../controllers/book');

/**
* router
*/
router.get('/', bookController.index);

module.exports = router;