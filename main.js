const fs = require('fs');

let reg = new RegExp (process.argv[2],"i");
let filesearch = process.argv[3];


if(reg && filesearch == null){
    reg=/node/i;
    filesearch="bin";
}
readdirect(filesearch);

function readdirect(directory) {

    fs.readdir(directory, (err, files) => {
        files.forEach(file => {

            //console.log(file);
            if(fs.lstatSync(directory+"/"+file).isDirectory()){

                readdirect(directory+"/"+file);

            }

            else{
               if(fs.readFileSync(directory+"/"+file,"utf8").search(reg)!=-1){
                   console.log("file found inside = " + file);
               }

        }

            let n = file.search(reg);
            //console.log(n);

            if (n != -1) {
                console.log("file found = " + file);
            }

        });
    });
}
