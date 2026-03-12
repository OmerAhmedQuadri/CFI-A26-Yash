import { questionInt } from "readline-sync";
import chalk from "chalk";
import { createTask, deleteTask, getAllTasks, getTaskByID, getTaskByPriority, updateTask } from "./controllers.js";

const cli = async () => {
    const OPTIONS = {
        1 : getAllTasks,
        2 : getTaskByID,
        3 : getTaskByPriority,
        4 : createTask,
        5 : updateTask,
        6 : deleteTask
    }

    while (true) {
        console.log('====Tasky====');
        console.log('1 - getAllTasks');
        console.log('2 - getTaskByID');
        console.log('3 - getTaskByPriority');
        console.log('4 - createTask');
        console.log('5 - updateTask');
        console.log('6 - deleteTask');
        console.log('0 - Exit');

        const choice = questionInt("Enter your choice: ")

        if(!choice) return console.log(chalk.redBright("Exiting..."));
        if(!OPTIONS[choice]){
            console.log(chalk.red("Invalid choice, try again..."));
            continue
        }

        await OPTIONS[choice]()
    }
}

cli()