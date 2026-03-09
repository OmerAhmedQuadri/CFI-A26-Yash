import { readDB, writeDB } from "../models/models.js"


const getAllTasks =async (req, res) => {
    const data = await readDB()
    res.json(data)
}

const getTaskByID =async (req, res) => {
    const id = req.params.id
    const tasks = await readDB()

    const task = tasks.find((task) => task.id == id)

    if(!task) return res.json({status : false, message : 'Task not found'})
    
    res.json({status : true, message : 'Task fetched successfully', task : task})
}

const createTask = async (req, res) => {
    const tasks = await readDB()
    const newTask = req.body
    
    const index = tasks.findIndex(task => task.id == newTask.id)
    if(index != -1) return res.send('Task already exists')
        
    tasks.push(newTask)
    await writeDB(tasks)
    res.json({status : true, message : 'Task Created Successfully', task : newTask})
}

const updateTask = async (req, res) => {
    const taskList = await readDB()
    const taskIndex = req.taskIndex
    const newTask = {...taskList[taskIndex]}
    if(req.task.task) newTask.task = req.task.task
    if(req.task.deadline) newTask.deadline = req.task.deadline
    if(req.task.priority) newTask.priority = req.task.priority
    taskList[taskIndex] = {...taskList[taskIndex], ...newTask}
    
    await writeDB(taskList)

    res.json({status : true, message : 'Updated successfully', task : taskList[taskIndex]})
}

const deleteTask = async (req, res) => {
    const {id} = req.params

    const taskList = await readDB()
    const taskIndex = taskList.findIndex( task => task.id == id)
    if(taskIndex == -1) return res.json({status : false, message : 'Task not found'})

    taskList.splice(taskIndex, 1)
    await writeDB(taskList)
    res.json({status : true, message : 'Deleted Task successfully'})
}

export {getAllTasks, getTaskByID, createTask, updateTask, deleteTask}