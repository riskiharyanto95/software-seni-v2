/**
* /controllers/article.js
*/  
const axios = require("axios");

exports.index = function(req, res, next) {
    res.render('article', { title: 'article' });
};


// https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20191201&end_date=20191202&q=Limited%20Edition%20Challah%20at%20Zaro%E2%80%99s&sort=newest&api-key=SQKHqziDq7IydP9Cjxv7oYtPlIkIT2sb
