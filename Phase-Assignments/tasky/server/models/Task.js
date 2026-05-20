import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    taskname: {
        type: String,
        required: true
    },
    deadline: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },
    isComplete: {
        type: Boolean,
        default: false
    }
})

const Task = mongoose.model('Task', taskSchema)

export default Task