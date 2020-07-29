/**
* /controllers/book.js
*/  
exports.index = function(req, res, next) {
    res.render('book', { title: 'book' });
};

// https://api.nytimes.com/svc/books/v3/lists.json?list=hardcover-fiction&api-key=[YOUR_API_KEY]