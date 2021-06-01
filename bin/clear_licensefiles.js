const fs = require('fs');
const {resolve} = require('path');
var glob = require("glob");
const filePath = './staticfiles/bundles/*.txt';

glob(filePath, function (er, files) {
    for (const file of files) {
        // try to remove the file and log the result
        fs.unlink(resolve(file), (err) => {
            if (err) throw err;
            // console.log(`Deleted ${file}`);
        });
    }
})