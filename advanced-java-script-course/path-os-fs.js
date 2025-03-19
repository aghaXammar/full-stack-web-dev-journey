import * as path from "path";


const correctPath = path.resolve("path-os-fs.js");
const fileName = path.basename(correctPath);
const fileExtension = path.extname(correctPath);

console.log(fileName,fileExtension);


const pathObject = path.parse(correctPath);
console.log(pathObject);

const pathString = path.format(pathObject);
console.log(pathString);


const dirName = "full-stack-web-dev-journey/advanced-java-script-course";
const pathJoin = path.join(dirName,fileName);
console.log(pathJoin); 