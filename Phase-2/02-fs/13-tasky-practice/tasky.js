import fs from "fs/promises";
import { question, questionInt } from "readline-sync";

let path = './tasks.json'

const readDB = async () => {
    let data = await fs.readFile(path, 'utf-8')
    return JSON.parse(data)
}

const writeDB = async (tasks) => {
    let data = JSON.stringify(tasks, null, 4)
    await fs.writeFile(path, data)
}

const createTask = async () => {
    const tasks = await readDB()
    const newTask = {
        id : Date.now(),
        taskname : question('Enter the taskname : '),
        deadline : question("Enter deadline format DD/MM/YYYY : "),
        priority : question('Enter high/mid/low : '),
    }
    tasks.push(newTask)
    await writeDB(tasks)
    console.log('Task created successfully');
}

const updateTask = async () => {
    const tasks = await readDB()
    const taskID = questionInt('Enter the id of task : ')
    const task = tasks.findIndex( (tsk) => {        
        return  tsk.id == taskID
    })
    
    if(task == -1) return console.log('Task not found');
    const data = {
        taskname : question('Enter the taskname : '),
        deadline : question("Enter deadline format DD/MM/YYYY : "),
        priority : question('Enter high/mid/low : '),
    }
    tasks[task] = { ...tasks[task], ...data }
    await writeDB(tasks)
    console.log('Updated successfully');
}

const deleteTask = async () => {
    const tasks = await readDB()
    const taskID = questionInt('Enter the id of task : ')
    const task = tasks.findIndex( (tsk) => {
        return  tsk.id == taskID
    })
    if(task == -1) return console.log('Task not found');
    tasks.splice(task,1)
    await writeDB(tasks)
    console.log('Deleted Successfully');
}

const printTasks =async () => {
    const tasks = await readDB()
    console.log(tasks);
    
}

async function main() {
    while (true) {
        console.log();
        console.log('====TASKY====');
        console.log('0 - Exit');
        console.log('1 - Create a Task');
        console.log('2 - Update a Task');
        console.log('3 - Delete a Task');
        console.log('4 - Print all Tasks');
        let choice = questionInt("Enter your choice : ")

        switch (choice) {
            case 0:
                return

            case 1:
                await createTask()
                break;
            
            case 2:
                await updateTask()
                break
            
            case 3:
                await deleteTask()
                break
            
            case 4:
                await printTasks()
                break

            default:
                break;
        }
    }
}

main()