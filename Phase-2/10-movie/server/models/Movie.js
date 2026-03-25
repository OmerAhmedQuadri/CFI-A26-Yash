import mongoose from "mongoose"

const movieSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String,
        default : null
    },
    arr_rating : {
        type : [Number],
        default : []
    },
    rating : {
        type : Number,
        default : 0
    }
})

const Movie = mongoose.model('Movie', movieSchema)
export default Movie