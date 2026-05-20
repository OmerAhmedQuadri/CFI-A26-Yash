import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import './dbConnect.js'
import './seeds/admin.seed.js'
import adminRoutes from './routes/adminRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

const PORT = process.env.PORT || 3000
const server = express()
server.use(cors())
server.use(express.json())

server.get('/', (req, res) => {
    res.send({
        sucess: true,
        message: 'server is running'
    })
})
server.use('/api/admin', adminRoutes)
server.use('/user', userRoutes)
// server.use('/tasks', taskRoutes)

server.use((req, res)=> {
    return res.send({
        success: false,
        
        message: 'Route not found'
    })
})

server.listen(PORT, () =>{
    console.log('server is running',PORT);
    
})