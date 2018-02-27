const testFolder = 'bin';
const fs = require('fs');

let reg = "/"+process.argv[2]+"/i";
let filesearch = process.argv[3];

reg=/node/i;
filesearch="bin";
readdirect(filesearch);

function readdirect(directory) {

    fs.readdir(directory, (err, files) => {
        files.forEach(file => {


            //console.log(file);
            //console.log(fs.lstatSync(directory+"/"+file).isDirectory());
            if(fs.lstatSync(directory+"/"+file).isDirectory()){
                console.log(directory+"/"+file);
                readdirect(directory+"/"+file);

            }
           // console.log(fs.stat("bin/"+file).isDirectory);
            let n = file.search(reg);

            if (n != -1) {
                console.log("file found = " + file);
            }
        });
    });
}

/*
var fs = require('fs');


if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
}

var path = process.argv[2];

fs.readdir(path, function(err, items) {
    console.log(items);

    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
    }
});*/