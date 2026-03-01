import fs from 'fs/promises'
import rs from 'readline-sync'
import chalk from 'chalk'

const path = './tasks2.json'

async function displayTasks(tasks) {
    if (tasks.length == 0) console.log('No Tasks Available');
    else {
        console.log('\nTasks:');
        console.log('--------------------');
        
        tasks.forEach(task => {
            console.log(`Id: ${task.id}`);
            console.log(`Task: ${task.taskname}`);
            console.log(`Deadline: ${task.deadline}`);
            console.log(`Priority: ${task.priority}`);
            console.log('--------------------');
        });

    }
}

async function addTask(tasks,) {
    let task = {
        id: Date.now(),
        taskname: rs.question('Enter the taskname: '),
        deadline: rs.questionInt('Number of days left for the deadline of the task: '),
        priority: rs.question('Enter the priority of the task: '),
    }

    tasks.push(task)
}

async function deleteTask(tasks) {
    // console.log('Insdide function');
    
    let id = rs.questionInt('Enter the task id: ')
    let index = tasks.findIndex(task => task.id == id)
    
    // console.log(id, index);
    
    if (index != -1) {
        // console.log(tasks);
        
        tasks.splice(index, 1)
        console.log(chalk.red('Deleted successfully'));
    }else   console.log('Task not found');
// console.log('exiting function');

}

async function updateTask(tasks) {
    let id = rs.questionInt('Enter the task id: ')
    let index = tasks.findIndex(task => task.id == id)
    if (index != -1) {
        let task =  {
        taskname: rs.question('Enter the taskname: '),
        deadline: rs.questionInt('Number of days left for the deadline of the task: '),
        priority: rs.question('Enter the priority of the task: '),
        }
        tasks[index] = {...tasks[index], ...task}
        } else  console.log('Task not found');
                
}

async function saveTasks(tasks) {
    const data = JSON.stringify(tasks, null, 4)
    fs.writeFile(path, data, (err) => {
        if (err) console.log(err)
        else console.log('Tasks saved✅');
    })
    console.log('Exiting...');
}

async function main() {
    
fs.readFile(path, 'utf-8', (err, data) => {
    if (err) return console.log(err);

    const tasks = data ? JSON.parse(data) : []

    while (true) {
        let id = null
        let task = null
        let deadline = null
        console.log('\n===TASKS===');
        console.log(chalk.bgYellow('0. Save and Exit'));
        console.log(chalk.greenBright('1. Display tasks'));
        console.log(chalk.green('2. Add a task'));
        console.log(chalk.redBright('3. Delete a task'));
        console.log(chalk.blueBright('4. Update a task'));

        const choice = rs.questionInt('Enter you choice: ')

        switch (choice) {
            case 1:
                displayTasks(tasks)
                break;

            case 2:
                addTask(tasks)
                break

            case 3:
                // console.log('before function');
                
                deleteTask(tasks)
                // console.log('after function');
                
                break

            case 4:
                updateTask(tasks)
                break

            case 0:
                saveTasks(tasks)
                return

            default:
                console.log('Invalid choice!');
                break;
        }
    }

})
}

main()