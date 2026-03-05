import fs from 'fs/promises'
import rs from 'readline-sync'
import chalk from 'chalk'

let db = './tasks.json'

async function dbInit() {
    try {
        await fs.access(db)
        const tasks = await readDB()
        if (!Array.isArray(tasks)) {
            await writeDB([])
            return
        }
    } catch (error) {
        console.log(chalk.bgMagentaBright('DB not found, Initializing new DB'));
        await writeDB([])
        await dbInit()
    }
}

async function readDB() {
    try {
        let data = await fs.readFile(db, 'utf-8')
        return JSON.parse(data)
    } catch (error) {
        console.log(chalk.redBright('Read DB error', error));
        
        // fs.writeFile(db, '[]')
        // return readDB()//instead we'll use db init
    }
}

async function writeDB(tasks) {
    try {

    } catch (error) {
        console.log(chalk.redBright('Error write DB',error));
    }
}

async function printTasks(params) {
    try {
        let tasks = await readDB()
        console.log(tasks);
    } catch (error) {
        console.log(error);
    }
}

async function createTask() {
    try {
        const tasks = await readDB()
        const newTask = {
            id : Date.now(),
            task : rs.question('Enter the task name:'),
            deadline : rs.question('Please enter the deadline (dd/mm/yyyy): '),
            priority : rs.question('Enter the priority (high/medium/low): ')
        }
        tasks.push(newTask)
        await writeDB(tasks)
        console.log('Task created successfully');
        
    } catch (error) {
        console.log('Error creating new task',error);
    }
}

async function updateTask() {
    try {
        const tasks = await readDB()
        const taskIndex = rs.questionInt("Enter the id to be updated: ")
        if (taskIndex == -1) {
            return console.log('Task not found to update');
        }
        const newTask = {
            deadline : rs.question('Please enter the deadline (dd/mm/yyyy): '),
            priority : rs.question('Enter the priority (high/medium/low): ')
        }
        tasks[taskIndex] = newTask
        await writeDB(tasks)
        console.log('Task updated successfully');
        
    } catch (error) {
        console.log('Error updating task',error);
        
    }
}

async function deleteTask() {
    try {
        const tasks = await readDB()
        const taskIndex = rs.questionInt("Enter the id to be updated: ")
        if(taskIndex == -1)
            return console.log('Task not found to delete');
        tasks.splice(taskIndex,1)
        await writeDB(tasks)
        console.log('Task deleted successfully');
        
    } catch (error) {
        console.log('Error deleting task', error);
        
    }
}

async function tasky() {
    dbInit()
    while (true) {
        console.log('====TASKY====');
        console.log('1-Create Task');
        console.log('2-Update Task');
        console.log('3-Delete Task');
        console.log('4-Print Tasks');
        console.log('0-Exit');

        let choice = rs.questionInt("Enter your choice: ")

        switch (choice) {
            case 1:
                await createTask()
                break
            case 2:
                await updateTask()
                break;

            case 3:
                await deleteTask()
                break;

            case 4:
                await printTasks()
                break;

            case 0:
                return
        
            default:
                break;
        }
    }
}

tasky()