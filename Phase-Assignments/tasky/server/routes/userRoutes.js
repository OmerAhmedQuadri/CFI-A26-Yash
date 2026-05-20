import express from 'express'

const userRoutes = express.Router()

userRoutes.get('/', (req, res) => {
    res.send({
        sucess:true,
        message:'Admin Route just working fine'
    })
})

// userRoutes.post('/login', userLoginMiddleware, userLogin)

export default userRoutes