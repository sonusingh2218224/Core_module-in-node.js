let path = require("path");



let ext = path.extname(path.join(__dirname, "abcd.js"));
console.log(ext, 'ext')
let name = path.basename(__dirname);
console.log(name);

name = path.basename(path.join(__dirname, "abcd.js"))
console.log(name)