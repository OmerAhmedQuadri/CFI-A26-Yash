import chalk from "chalk"
import { question } from "readline-sync";
const newTask = {
    task: question('Enter the task: '),
}

console.log(chalk.redBright(newTask));


// chalk does not parse objects