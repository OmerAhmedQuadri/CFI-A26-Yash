import express from 'express'

const taskRoutes = express.Router()

taskRoutes.get('/', (req, res) => {
    res.send({
        sucess:true,
        message:'Task Route just working fine'
    })
})

taskRoutes.post('/create', createTaskMiddleware, createTask)

export default taskRoutes