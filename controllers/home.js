/**
* /controllers/home.js
*/    
exports.index = function(req, res, next) {
    res.render('home', { title: 'home' });
};