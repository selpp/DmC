import fetch from 'node-fetch'

var download = function(link) {
    return new Promise( (resolve, reject) => {
        fetch(link)
        .then(res => res.buffer())
        .then(buffer => 
            resolve(buffer)
        ).catch( err => 
            reject(err)
        )
    })
}

module.exports = download