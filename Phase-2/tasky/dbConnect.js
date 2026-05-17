// ============================================================
// dbConnect.js — MongoDB connection using Mongoose
//
// INTERVIEW CONCEPT: Mongoose is an ODM (Object Document Mapper).
// It lets you define schemas and models so that MongoDB documents
// behave like typed JavaScript objects with validation built in.
//
// This file is imported ONCE in server.js as a side-effect import.
// The connection is established once and reused for all requests.
// ============================================================

import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('✅ MongoDB connected successfully')
    } catch (error) {
        console.error('❌ MongoDB connection failed:', error.message)
        // Exit the process if DB connection fails — app cannot work without DB
        process.exit(1)
    }
}

dbConnect()

export default dbConnect
