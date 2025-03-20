import * as path from "path";


// const correctPath = path.resolve("path-os-fs.js");
// const fileName = path.basename(correctPath);
// const fileExtension = path.extname(correctPath);

// console.log(fileName,fileExtension);


// const pathObject = path.parse(correctPath);
// console.log(pathObject);

// const pathString = path.format(pathObject);
// console.log(pathString);


// const dirName = "full-stack-web-dev-journey/advanced-java-script-course";
// const pathJoin = path.join(dirName,fileName);
// console.log(pathJoin); 



import * as fs from "fs";

const name = "ammar";

fs.writeFile("write-file.txt","name",(err)=>{
    if (err) {
        console.log(err);
    } else{
        console.log("file written successfully");
    }
})

console.log("running the app");



fs.readFile("write-file.txt","utf-8",(err,data)=>{
    if (err) {
        console.log("no such file exists");
    } else{
        console.log(data);
    }
})



fs.rename("write-file.txt","write-file-renamed.txt",(err)=>{
    (err) ? console.log(err) : console.log("file renamed successfully");
})

//fs.unlink to delete a file