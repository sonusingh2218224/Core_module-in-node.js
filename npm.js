import chalk from "chalk"
import figlet from "figlet";

console.log(chalk.red('Hello world!'));


figlet("hello world!!", function (err, data) {
    if (err) {
        console.log('something went wrong')
        console.dir(err);
        return;
    }
    console.log(chalk.red(data));
})