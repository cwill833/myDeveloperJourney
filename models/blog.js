const username = "Chris"

const blogPost = "This is my awesome blog post! yee"

module.exports = {
    getUserName,
    getBlogPost
}

function getUserName(){
    return username
}

function getBlogPost(){
    return blogPost
}