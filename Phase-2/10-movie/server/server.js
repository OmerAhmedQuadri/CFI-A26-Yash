import express from "express"
import dotenv from "dotenv"
import './dbConnector.js'
import movieRouter from "./routes/movie.routes.js"

dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send({
        status : true,
        message : 'Server is running'
    })
})

app.use('/api/movie/', movieRouter)

app.use((req, res) => {
    res.status(400).send({
        stauts : false,
        message : 'Route Not Found'
    })
})

app.listen(PORT, () => {
    console.log('Server @'+PORT);
})