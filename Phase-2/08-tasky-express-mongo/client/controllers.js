import chalk from "chalk";
import axios from "axios";
import { keyInYN, question, questionInt } from "readline-sync";

const app = axios.create({
    baseURL: 'http://localhost:3000/api/tasks/',
    timeout: 3000,
    validateStatus : (status) => status<500
})

const getAllTasks = async () => {
    try {
        const response = await app.get('/')
        if (!response.data.success) return console.log(chalk.redBright(response.data.message))
        console.log(chalk.yellowBright(response.data.message));
        console.log(response.data.data);

    } catch (error) {
        console.log(chalk.redBright(error));
    }
}

const getTaskByID = async () => {
    try {
        const id = question('Enter the id: ')

        const response = await app.get(id)
        if (!response.data.success) return console.log(chalk.redBright(response.data.message))
        console.log(chalk.yellowBright(response.data.message));
        console.log(response.data.data);

    } catch (error) {
        console.log(chalk.redBright(error));
        console.log('At catch inclient controller');

    }
}

const getTaskByPriority = async () => {
    try {
        const priority = question('Enter the priority: ') || 'high'

        const response = await app.get(`/priority/${priority}`)
        if (!response.data.success) return console.log(chalk.redBright(response.data.message))
        console.log(chalk.yellowBright(response.data.message));
        console.log(response.data.data);

    } catch (error) {
        console.log(chalk.redBright(error));
    }
}

const createTask = async () => {
    try {

        task = question('Enter the task: '),
        deadline = question('Enter the deadline in (DD/MM/YYYY): '),
        priority = question('Enter the priority: ')

        

        const response = await app.post('/create', {
            task,
            deadline,
            priority
        })
        if (!response.data.success) return console.log(chalk.redBright(response.data.message))
        console.log(chalk.yellowBright(response.data.message));
        console.log(response.data.data);

    } catch (error) {
        console.log(chalk.redBright(error.message));
    }
}

const updateTask = async () => {
    try {

        id = question('Enter the id: '),
        task = question('Enter the task: '),
        deadline = question('Enter the deadline in (DD/MM/YYYY): '),
        priority = question('Enter the priority: ')
        completed = keyInYN
        const response = await app.put('/update', newTask)
        if (!response.data.success) return console.log(chalk.redBright(response.data.message))
        console.log(chalk.yellowBright(response.data.message));
        console.log(response.data.data);

    } catch (error) {
        console.log(chalk.redBright(error.message));
    }
    
}

const deleteTask = async () => {
    try {
        const id = question('Enter the id: ')

        const response = await app.delete(`/delete/${id}`)
        if (!response.data.success) return console.log(chalk.redBright(response.data.message))
        console.log(chalk.yellowBright(response.data.message));
        console.log(response.data.data);

    } catch (error) {
        console.log(chalk.redBright(error));
        console.log('At catch in client controller');

    }
    
}

export { getAllTasks, getTaskByID, getTaskByPriority, createTask, updateTask, deleteTask }