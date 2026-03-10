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
        const newTas = { ...newTask, id : null }
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

export { createTask }