const model = require('../models/blog')

module.exports = {
    getAll
}


function getAll(req, res){
    res.render('index', {
        user: model.getUserName(),
        post: model.getBlogPost()
    })
}