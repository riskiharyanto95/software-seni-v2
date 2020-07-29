/**
* /controllers/article.js
*/  
const Joi = require('@hapi/joi');
const axios = require("axios");

exports.index = function(req, res, next) {
    res.render('article', { articles: [], path_image:process.env.APP_URL_IMAGES_NY_TIMES });
};

exports.searchArticle = async function(req, res, next) {  
    var dataArticle = []
    const schema = Joi.object({
        sortBy: Joi.string()
            .required()
    })

    const { error, value } = schema.validate({ sortBy: req.body.sortBy });

    if (!error){
        var url = process.env.APP_URL_API_ARTICLES_NY_TIMES+"begin_date=20191201&end_date=20191202"
        url = req.body.title ? url+"&q="+req.body.title+"&sort="+req.body.sortBy+"&api-key="+process.env.APP_KEY_NY_TIMES : url+"&sort="+req.body.sortBy+"&api-key="+process.env.APP_KEY_NY_TIMES
        await axios.get(url)
        .then((response) => {
            dataArticle = response.data.response.docs;
        })
        .catch((error) => {
            console.log(error)
        })
    } 

    res.render('article', { articles: dataArticle, path_image:process.env.APP_URL_IMAGES_NY_TIMES  });
};

