import express from 'express'
import { adminAuthMiddleware, adminLoginMiddleware } from '../middlewares/adminMiddleware.js'
import { adminLogin,  createUserByAdmin } from '../controllers/adminController.js'

const adminRoutes = express.Router()

adminRoutes.get('/', (req, res) => {
    res.send({
        sucess: true,
        message: 'Admin Route just working fine'
    })
})

adminRoutes.post('/login', adminLoginMiddleware, adminLogin)
adminRoutes.use(adminAuthMiddleware)
adminRoutes.post('/create-user', createUserByAdmin)

adminRoutes.use((req, res)=> {
    return res.send({
        success: false,
        
        message: 'Admin Route not found'
    })
})


export default adminRoutes