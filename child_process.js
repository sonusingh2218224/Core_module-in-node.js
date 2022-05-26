const cp = require("child_process");
// console.log("Trying to open calcultor")
// cp.execSync("code");
const res = cp.execSync("node index.js")
console.log(res);
console.log("opened calculator");

