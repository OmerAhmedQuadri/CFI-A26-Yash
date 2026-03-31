import express from "express"
import { listMovie, getMovie, getExisitngMovies, rateMovie } from "../controllers/movie.controllers.js"

const movieRouter = express.Router()

movieRouter.get('/all/', getExisitngMovies)
movieRouter.get('/:id/', getMovie)
movieRouter.post('/list/', listMovie)
movieRouter.put('/rate/', rateMovie)

movieRouter.use((req, res) => {
    res.status(404).send({
        status: false,
        message: 'Movie route not found'
    })
})

export default movieRouter