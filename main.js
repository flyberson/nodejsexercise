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
