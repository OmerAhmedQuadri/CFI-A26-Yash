import mongoose, { Schema } from 'mongoose'

const books = new mongoose.Schema({
    bookname : {
        type : String,
        required : true
    }
})