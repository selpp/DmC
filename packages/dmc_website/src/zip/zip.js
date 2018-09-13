const jszip = require('jszip');
const path = require('path');

export let load = (data) => {
    return new Promise((resolve, reject) => {
        let objects = { files: {}, dmc: null };

        jszip.loadAsync(data).then(zip => {
            let loadingFiles = [];

            for (let name in zip.files) {
                let elem = zip.files[name];

                if (!elem.dir) {
                    let ext = path.extname(name);
                    let src = (ext in ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webm', '.webp'])? 'base64': 'string';

                    loadingFiles.push(zip.file(name).async(src).then(data => {
                        objects.files[name] = data;
                        if(path.extname(name) === '.dmc') objects.dmc = data;
                    }));
                }
            }
            Promise.all(loadingFiles).then(v => {
                if(objects.dmc == null) { reject(new Error('DMC Script not found')); return; }
                resolve(objects);
            });
        }).catch(err => { reject(err) });
    });
};
