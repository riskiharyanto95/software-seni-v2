/**
* /routes/index.js
*/
var express = require('express');
var router = express.Router();

/**
* call child route
*/
var article = require('./article');
var home = require('./home');
var book = require('./book');

/**
* router
*/
router.use('/', home);
router.use('/articles', article);
router.use('/books', book);
router.get('*', function(req, res){
  res.render('error-404', { status: 404, message: 'Route Not Found' });
});

module.exports = router;
