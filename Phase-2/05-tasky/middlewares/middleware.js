import { readDB } from "../models/models.js"

const createTaskMiddleware = async (req, res, next) => {
    const newTask = req.body
    if(!newTask.id || !newTask.task) return res.json({status : false, message : 'Middleware says Invalid Details'})
        next()
}

const updateTaskMiddleware = async (req, res, next) => {
    const {id, task, deadline, priority} = req.body
    if(!id) return res.json({staus: false, message:'Invalid ID'})
    
    if(!(task || deadline || priority)) return res.json({status : false, message : 'Enter atleast 1 params'})
    
    const taskList = await readDB()

    const taskIndex = taskList.findIndex( task => task.id == id)
    if(taskIndex == -1) return res.json({status : false, message : 'Task not found'})
    

    req.taskIndex = taskIndex
    req.task = {
        id, task, deadline, priority
    }
    next()
}

export {createTaskMiddleware, updateTaskMiddleware}