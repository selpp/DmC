const LINK_BASE_URL = "https://drawmycode.github.io/#/"
const CORS_ANYWHERE = "https://cors-anywhere.herokuapp.com/"


var extractLink = function(url) {   
    return Buffer.from(url.split('/').pop(), 'base64').toString('ascii')
}

var makeLink = function(link) {
    return LINK_BASE_URL + Buffer.from(link).toString('base64')
}

module.exports = {extractLink, makeLink}