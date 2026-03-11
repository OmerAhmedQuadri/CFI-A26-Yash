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
        const task = await Task.findById(id)

        res.send({
            success: true,
            message: 'Tasks fetched Successfully',
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

        const { id, task, deadline, priority } = req.body

        if (!id) {
            return res.send({
                success: false,
                message: 'Missing ID to update',
            })
        }

        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { task, deadline, priority },
        )

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

        await Task.findByIdAndDelete(id)

        res.send({
            success: true,
            message: 'Task deleted successfully', 
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

export { createTask, getAllTasks, getTaskByID, updateTask, deleteTask }