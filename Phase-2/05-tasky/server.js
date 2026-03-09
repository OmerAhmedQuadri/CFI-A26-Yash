import express from "express";
import { createTask, deleteTask, getAllTasks, getTaskByID, updateTask } from "./controllers/controllers.js";
import { createTaskMiddleware, updateTaskMiddleware } from "./middlewares/middleware.js";

const PORT = 3000
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server is Running')
})

app.get('/api/tasks', getAllTasks)

app.get('/api/tasks/:id', getTaskByID)

app.post('/api/create', createTaskMiddleware, createTask)
    
app.put('/api/update', updateTaskMiddleware, updateTask)

app.delete('/api/delete/:id', deleteTask)

app.use( (req, res) => {
    res.json({status: false, message : 'Route not found'})
})
app.listen(PORT, () => {
    console.log('Server is running at http:localhost:'+PORT);
})