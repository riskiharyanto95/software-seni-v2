/**
* /routes/article.js
*/
var express = require('express');
var router = express.Router();

/**
* call controller 
*/
var articleController = require('../controllers/article');

/**
* router
*/
router.get('/', articleController.index);
router.post('/api/search-article', articleController.searchArticle);

module.exports = router;