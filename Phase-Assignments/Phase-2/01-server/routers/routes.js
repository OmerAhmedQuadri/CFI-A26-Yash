import express from 'express'

const server = express.Router()

server.use('/', (req, res) => {
    res.send({
        sucess: true,
        message: 'Route is working just fine'
    })
})

server.get('/books', getAllBooks)
server.get('/books/:id', getAllBooksByID)



export default server 