// ============================================================
// models/Task.js — Mongoose schema/model for tasks
//
// INTERVIEW CONCEPT: This uses a "reference" approach (userId field)
// instead of embedding tasks inside the User document.
//
// EMBEDDED (like 09-multi-user-tasky):
//   User { tasks: [{ title, ... }] }
//   Pro: Single query to get user + tasks
//   Con: Document size limit (16MB), harder to query tasks globally
//
// REFERENCE (this approach):
//   Task { userId: ObjectId, title, ... }
//   Pro: Independent querying, scalable, cleaner separation
//   Con: Requires JOIN-like populate() or separate queries
// ============================================================

import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Task title is required'],
            trim: true,
            maxlength: [200, 'Title cannot exceed 200 characters']
        },

        description: {
            type: String,
            default: '',
            trim: true,
            maxlength: [1000, 'Description cannot exceed 1000 characters']
        },

        priority: {
            type: String,
            enum: {
                values: ['low', 'medium', 'high'],
                message: 'Priority must be low, medium, or high'
            },
            default: 'medium'
        },

        dueDate: {
            type: Date,
            default: null
        },

        completed: {
            type: Boolean,
            default: false
        },

        // INTERVIEW: ObjectId ref creates a relationship between collections.
        // populate() can join the User data. Required: true ensures every
        // task belongs to a user — orphan tasks are impossible.
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    {
        timestamps: true  // adds createdAt, updatedAt automatically
    }
)

// Index for faster queries: "find all tasks for user X"
// INTERVIEW: Without this index, MongoDB scans every task document.
// With it, tasks are indexed by userId for O(log n) lookup.
taskSchema.index({ userId: 1, createdAt: -1 })

const Task = mongoose.model('Task', taskSchema)

export default Task
