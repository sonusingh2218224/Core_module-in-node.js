let fs = require("fs")
//read file
let buffer = fs.readFileSync("first.js")
console.log("bin data " + buffer)

fs.writeFileSync("abc.txt", "w")
fs.writeFileSync("abc.txt", "hum aaj kush hai")
// update file

fs.appendFileSync("abc.txt", "why are you happy today")

// create folder
fs.mkdirSync("meriDicectory")
// create file
fs.writeFileSync("meriDicectory/merifile.txt", "mera naam")

const content = fs.readdirSync("meriDicectory")
console.log(content)

// remove file (unlinkSync)
for (let i = 0; i < content.length; i++) {
    console.log("file", content[i], "is removed")
    fs.unlinkSync("meriDicectory/" + content[i])
}
// remove folder
fs.rmdirSync("meriDicectory")


//fs.existSync =>if a file exit at a path =>true/false
let doesPathExist = fs.existsSync("abc.txt");
console.log(doesPathExist);

let doesPathExists = fs.existsSync("abcd.txt");
console.log(doesPathExists);

// fs.lstateSync-> it check the path that exists file or folder

let detailsObj = fs.lstatSync(__dirname + "/file_system.js");
let ans = detailsObj.isFile()
console.log(ans)
ans = detailsObj.isDirectory();
console.log(ans, "hello")


for (let i = 1; i <= 10; i++) {
    let dirPathToMake = `Lecture-${i}`;
    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(dirPathToMake + "\\" + "index.js", `#readme file ${dirPathToMake}`)
}