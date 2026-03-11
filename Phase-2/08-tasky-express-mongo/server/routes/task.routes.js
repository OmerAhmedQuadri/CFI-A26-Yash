import express from "express";
import { createTask, deleteTask, getAllTasks, getTaskByID, getTaskByPriority, updateTask } from '../controllers/task.controller.js'

const taskRouter = express.Router()

taskRouter.post('/api/tasks/create', createTask)

taskRouter.get('/api/tasks', getAllTasks)

taskRouter.get('/api/tasks/:id', getTaskByID)

taskRouter.get('/api/tasks/priority/:priority', getTaskByPriority)

taskRouter.put('/api/tasks/update', updateTask)

taskRouter.delete('/api/tasks/delete/:id', deleteTask)

taskRouter.use((req, res) => {
    res.status(404).send({
        status: false,
        message: 'Task Route not found'
    })
})

export default taskRouter