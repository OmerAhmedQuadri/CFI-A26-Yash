import Movie from '../models/Movie.js'

const getExisitngMovies = async (req, res) => {
    try {
        const movies = await Movie.find().select("title description rating")

        if (!movies || movies.length == 0) {
            return res.status(404).send({
                status: false,
                message: 'No movies to display',
                data: []
            })
        }
        res.status(200).send({
            status: true,
            message: 'Movies fetched Successfully',
            data: movies
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: false,
            message: 'Internal server error',
            error: error
        })
    }
}

const listMovie = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send({
                status: false,
                message: 'Invalid Body'
            })
        }

        const { title, description } = req.body

        if (!title) {
            return res.status(400).send({
                status: false,
                message: 'Incomplete Body'
            })
        }

        const existingMovie = await Movie.findOne({ title: title })

        if (existingMovie) {
            return res.status(400).send({
                status: false,
                message: 'Movie already exists'
            })
        }

        const newMovie = Movie({
            title,
            description: description || null
        })
        
        await newMovie.save()

        res.status(200).send({
            status: true,
            message: 'Movie added Successfully',
            data: {
                title: newMovie.title,
                description: newMovie.description,
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: false,
            message: 'Internal server error',
            error: error
        })
    }
}

const rateMovie = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send({
                status: false,
                message: 'Invalid Body'
            })
        }

        const { id, rate } = req.body

        if (!id || id.length != 24) {
            return res.status(400).send({
                status: false,
                message: 'Invalid ID'
            })
        }
        rate = parseInt(rate)
        if (isNaN(rate) || rate < 1 || rate > 5) {
            return res.status(400).send({
                status: false,
                message: 'Invalid type of rate it should be Number'
            })
        }
        const existingMovie = await Movie.findById(id)

        if (!existingMovie) {
            return res.status(400).send({
                status: false,
                message: 'No movie associated with id'
            })
        }

        existingMovie.arr_rating.push(rate)

        const avg = existingMovie.arr_rating.reduce((acc, cur) => acc + cur, 0) / existingMovie.arr_rating.length
        existingMovie.rating = avg
        await existingMovie.save()
        res.status(200).send({
            status: true,
            message: 'Rating added successfully',
            data: {
                title: existingMovie.title,
                description: existingMovie.description,
                rating: existingMovie.rating
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: false,
            message: 'Internal server error',
            error: error
        })
    }
}

export { getExisitngMovies, listMovie, rateMovie }