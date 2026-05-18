// ============================================================
// models/User.js — Mongoose schema/model for users
//
// INTERVIEW CONCEPT: A Mongoose Schema defines the shape of
// documents in a MongoDB collection. Think of it like a class
// definition or a table schema in SQL.
//
// mongoose.model('User', userSchema) creates a Model — a class
// with static methods like User.find(), User.create() etc.
// ============================================================

import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,         // removes leading/trailing whitespace
            minlength: [2, 'Name must be at least 2 characters']
        },

        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,       // creates a unique index in MongoDB
            lowercase: true,    // stores email in lowercase always
            trim: true,
            // Basic email regex validation at the schema level
            match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
        }, 

        // IMPORTANT: We never store plain text passwords.
        // This field stores the bcrypt hash. See utils/bcrypt.js
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: [6, 'Password must be at least 6 characters']
        }
    },
    {
        // timestamps: true automatically adds createdAt and updatedAt fields
        // Mongoose manages these fields for you
        timestamps: true
    }
)

// INTERVIEW: mongoose.model() compiles the schema into a Model.
// The first argument 'User' becomes the collection name 'users' (lowercase, plural).
const User = mongoose.model('User', userSchema)

export default User
