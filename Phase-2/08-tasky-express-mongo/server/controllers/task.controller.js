import Task from '../models/Task.js'

const createTask = async (req, res) => {
    try {
        if (!req.body) {
            return res.send({
                success: false,
                message: 'Missing Body',
            })
        }
        const { task, deadline, priority } = req.body
        if (!task || !deadline)
            return res.send({
                success: false,
                message: 'Invalid or Incomplete Data',
            })

        // const task = Task({
        //     task: 'Learn MongoDB',
        //     priority: 'high'
        // })

        const exisitngTask = await Task.findOne({ task: task })
        if (exisitngTask) {
            res.send({
                success: false,
                message: 'Task already exists',
            })
            console.log(exisitngTask);
            return
        }

        const newTask = Task({ task, deadline, priority })
        const newTas = { ...newTask, id: null }
        await newTask.save()

        res.send({
            success: true,
            message: 'task saved successfully',
            data: newTas
        })
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find()

        if (!tasks || tasks.length == 0) return res.send({
            success: false,
            message: 'No taks found',
        })

        res.send({
            success: true,
            message: 'Tasks fetched Successfully',
            data: tasks
        })

    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

const getTaskByID = async (req, res) => {
    try {
        const { id } = req.params
        if (id.length != 24) return res.send({
            success: false,
            message: 'Invalid Task ID length'
        })

        const task = await Task.findById(id)
        console.log(task);

        if (!task) return res.send({
            success: false,
            message: 'Invalid Task ID',
            data: {}
        })

        res.send({
            success: true,
            message: 'Task fetched Successfully',
            data: task
        })

    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

const getTaskByPriority = async (req, res) => {
    try {
        const { priority } = req.params
        if (!['high', 'medium', 'low'].includes(priority)) return res.send({
            success: false,
            message: 'Invalid Task Priority'
        })

        const task = await Task.find({ priority })
        // console.log(task);

        if (!task) return res.status(400).send({
            success: false,
            message: 'Task not found with priority',
            data: []
        })

        res.send({
            success: true,
            message: 'Task fetched Successfully',
            data: task
        })

    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

const updateTask = async (req, res) => {
    try {
        if (!req.body) {
            return res.send({
                success: false,
                message: 'Missing Body',
            })
        }

        const { id, task, deadline, priority, completed } = req.body
        
        if (!id || id.length != 24) {
            return res.send({
                success: false,
                message: 'Missing ID to update',
            })
        }
        
        if (!task || !deadline || !priority || !(completed != undefined))
            return res.send({
                success: false,
                message: 'Invalid or Incomplete Data',
            })
        
        const updatedAt = new Date().toLocaleString()
        const updatedTask = await Task.findByIdAndUpdate(id, { task, deadline, priority, updatedAt, completed }, { runValidators: true, new: true })

        if (!updatedTask) {
            return res.send({
                success: false,
                message: 'Task does not exist',
            })
        }

        res.send({
            success: true,
            message: 'Task updated successfully',
            data: updatedTask
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error updating task',
            error
        })
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params
        if (id.length != 24) return res.send({
            success: false,
            message: 'Invalid Task ID length'
        })
        const task = await Task.findByIdAndDelete(id)

        if (!task) return res.send({
            success: false,
            message: 'Task Not Found',
            data: {}
        })

        res.send({
            success: true,
            message: 'Task deleted successfully',
            data: task
        })



    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error updating task',
            error
        })
    }
}

export { createTask, getAllTasks, getTaskByPriority, getTaskByID, updateTask, deleteTask }