import chalk from 'chalk'
import axios from 'axios'
import { questionInt, question } from "readline-sync";

class CLI {
    constructor() {
        this.BASE_URL = 'http://localhost:3000/api/tasks',
            this.selectedTask = null,
            this.tasks = null,
            this.app = axios.create({
                baseURL: this.BASE_URL,
                timeout: 3000,
                validateStatus: (status) => status < 500
            })
    }

    async start() {
        this.OPTIONS = {
            1: this.getAllTasks.bind(this),
            2: this.getTaskByPriority.bind(this),
            3: this.createTask.bind(this),
            4: this.updateTask.bind(this),
            // 6: this.deleteTask.bind(this)
        }

        console.log('====Tasky====');
        console.log('1 - getAllTasks');
        console.log('2 - getTaskByPriority');
        console.log('3 - createTask');
        console.log('4 - updateTask');
        console.log('5 - deleteTask');
        console.log('0 - Exit');

        const choice = questionInt("Enter your choice: ")

        if (!choice) {
            console.log(chalk.redBright("Exiting..."))
            process.exit(0)
        }
        if (!this.OPTIONS[choice]) {
            console.log(chalk.red("Invalid choice, try again..."));
            return await this.start()
        }

        await this.OPTIONS[choice]()
        await this.start()
    }

    async getAllTasks() {
        try {
            const response = await this.app.get('/')
            if (!response.data.success) return console.log(chalk.redBright(response.data.message))
            console.log(chalk.yellowBright(response.data.message));
            this.tasks = response.data.data
            this.printTask()
            // console.log(response.data.data);

        } catch (error) {
            console.log(chalk.redBright(error));
        }
    }

    async printTask() {
        this.tasks.forEach(t => {
            console.log('Task : ' + t.task);
            console.log('Deadline : ' + t.deadline);
            console.log('Priority : ' + t.priority);
            console.log(chalk.blueBright('----------------------------------------------------'));
        });
    }

    async getTaskByPriority() {
        try {
            const priority = question('Enter the priority: ') || 'high'

            const response = await this.app.get(`/priority/${priority}`)
            if (!response.data.success) return console.log(chalk.redBright(response.data.message))
            console.log(chalk.yellowBright(response.data.message));
            this.tasks = response.data.data
            this.printTask()
            // console.log(response.data.data);

        } catch (error) {
            console.log(chalk.redBright(error));
        }
    }

    createTask = async () => {
        try {

            const task = question('Enter the task: ')
            const deadline = question('Enter the deadline in (DD/MM/YYYY): ')
            const priority = question('Enter the priority: ')



            const response = await this.app.post('/create', {
                task,
                deadline,
                priority
            })
            if (!response.data.success) return console.log(chalk.redBright(response.data.message))
            console.log(chalk.yellowBright(response.data.message));
            this.tasks = [response.data.data]
            this.printTask()
            // console.log(response.data.data);

        } catch (error) {
            console.log(chalk.redBright(error.message));
        }
    }

    updateTask = async () => {
        try {

            const id = question('Enter the id: ')
            const task = question('Enter the task: ')
            const deadline = question('Enter the deadline in (DD/MM/YYYY): ')
            const priority = question('Enter the priority: ')
            // completed = keyInYN
            const response = await this.app.put('/update', newTask)
            if (!response.data.success) return console.log(chalk.redBright(response.data.message))
            console.log(chalk.yellowBright(response.data.message));
            console.log(response.data.data);

        } catch (error) {
            console.log(chalk.redBright(error.message));
        }
    }

}

export default CLI