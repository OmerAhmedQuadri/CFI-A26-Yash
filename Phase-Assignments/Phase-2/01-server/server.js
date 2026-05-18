
/*
Library system

    Implement the following routes:
        - input validation is a must where ever required
        - use mongodb (donot use filedb)
        - auth is not required
    
    GET:
        get all books - /api/books
        get book by id - /api/books/:id

    POST:
        add a book - /api/add
         - id
         - title
         - author
         - price

    PUT:
        update a book - /api/update

    DELETE:
        delete a book - /api/delete/:id


*/

import express from 'express'
import cors from 'cors'
import libraryRoutes from './routers/routes.js'

const server = express()
const PORT = 3000

server.use(express.json())

server.get('/', (req,res)=>{
    res.send({
        sucess:true,
        message: 'Route is working just fine'
    })
})

server.use('/api/',libraryRoutes)

server.listen(PORT)

