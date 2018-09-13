var jszip = require('jszip')
var path = require('path')

var load = function(data) {
    return new Promise( (resolve, reject) => {
        var objects = {
            files: {},
            dmc: null
        }

        jszip.loadAsync(data).then( (zip) => {
            var loadingFiles = []

            for (let name in zip.files) {
                let elem = zip.files[name]

                if (!elem.dir) {
                    let src = "string"
                    let ext = path.extname(name)

                    if (ext in ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webm', '.webp']) {
                        src = "base64"
                    }

                    loadingFiles.push(zip.file(name).async(src).then((data) => {
                        objects.files[name] = data

                        if(path.extname(name) === '.dmc') {
                            // console.log(name+" is the dmc script")
                            objects.dmc = data
                        }

                        // console.log(name+" -> "+data.slice(0,10))
                    }))
                }
                
            }
            Promise.all(loadingFiles).then((v) => {
                if(objects.dmc == null) {
                    reject(new Error("DMC Script not found"))
                    return
                }

                resolve(objects)
            })
        }).catch( (err) => {
            reject(err)
        })
    }) 
}



module.exports = load