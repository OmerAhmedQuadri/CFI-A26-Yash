import express from 'express'
import './dbConnector.js'
import { createTask } from './controllers/task.controller.js'

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send({
        status: true,
        message: 'Server is running'
    })
})

app.post('/api/tasks/create', createTask)

app.use((req, res) => {
    res.status(404).send({
        status: false,
        message: 'Route not found'
    })
})

app.listen(PORT, () => {
    console.log('Server is running at',PORT);
})

/*
Routes:

    GET:
        /api/tasks -          get all tasks
        /api/tasks/id -       get task by id

    POST:
        /api/tasks/create -   create a new task
    
    PUT:
        /api/tasks/update -   update task by id
    
    DELETE:
        /api/tasks/delete/id -   delete task by id
*/