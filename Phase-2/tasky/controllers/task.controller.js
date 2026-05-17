// ============================================================
// controllers/task.controller.js — Task CRUD business logic
//
// INTERVIEW CONCEPT: CRUD stands for:
//  C = Create  → POST   /api/tasks
//  R = Read    → GET    /api/tasks  and  GET /api/tasks/:id
//  U = Update  → PUT    /api/tasks/:id
//  D = Delete  → DELETE /api/tasks/:id
//
// Plus toggle complete: PATCH /api/tasks/:id/toggle
//
// Every controller function follows this pattern:
//  1. Extract data from req (params, body, query, user)
//  2. Validate data
//  3. Perform DB operation
//  4. Send response
//
// INTERVIEW: What are query parameters vs route parameters?
//  Route params: /tasks/:id — part of the URL path
//  Query params: /tasks?priority=high — appended after ?
//  Body:         JSON sent in request body (POST/PUT/PATCH)
// ============================================================

import Task from '../models/Task.js'

// ── CREATE TASK ───────────────────────────────────────────────
// POST /api/tasks
// Body: { title, description?, priority?, dueDate? }
export const createTask = async (req, res) => {
    try {
        const { title, description, priority, dueDate } = req.body

        if (!title || !title.trim()) {
            return res.status(400).json({
                success: false,
                message: 'Task title is required'
            })
        }

        if (priority && !['low', 'medium', 'high'].includes(priority)) {
            return res.status(400).json({
                success: false,
                message: 'Priority must be low, medium, or high'
            })
        }

        const task = await Task.create({
            title: title.trim(),
            description: description?.trim() || '',
            priority: priority || 'medium',
            dueDate: dueDate || null,
            userId: req.user._id  // from auth middleware
        })

        res.status(201).json({
            success: true,
            message: 'Task created successfully',
            data: task
        })

    } catch (error) {
        console.error('[createTask]', error)
        res.status(500).json({ success: false, message: 'Failed to create task' })
    }
}

// ── GET ALL TASKS ─────────────────────────────────────────────
// GET /api/tasks
// Query params: ?priority=high&completed=false&search=meeting&sort=dueDate
export const getAllTasks = async (req, res) => {
    try {
        // Build MongoDB query filter — only return this user's tasks
        const filter = { userId: req.user._id }

        // INTERVIEW: Query params for filtering
        // ?priority=high → only show high priority tasks
        if (req.query.priority && req.query.priority !== 'all') {
            filter.priority = req.query.priority
        }

        // ?completed=true → only show completed tasks
        if (req.query.completed !== undefined && req.query.completed !== 'all') {
            filter.completed = req.query.completed === 'true'
        }

        // ?search=meeting → title contains "meeting" (case-insensitive)
        if (req.query.search) {
            // INTERVIEW: $regex is MongoDB's pattern matching operator
            // 'i' flag = case-insensitive
            filter.title = { $regex: req.query.search, $options: 'i' }
        }

        // Build sort option
        // INTERVIEW: MongoDB sort: 1 = ascending, -1 = descending
        let sortOption = { createdAt: -1 }  // default: newest first

        if (req.query.sort === 'oldest') {
            sortOption = { createdAt: 1 }
        } else if (req.query.sort === 'priority') {
            // Custom priority sort: high > medium > low
            // MongoDB doesn't natively sort enums by custom order,
            // so we handle priority sorting client-side (see app.js)
            sortOption = { priority: 1, createdAt: -1 }
        } else if (req.query.sort === 'dueDate') {
            sortOption = { dueDate: 1 }
        }

        const tasks = await Task.find(filter).sort(sortOption)

        res.json({
            success: true,
            message: 'Tasks fetched successfully',
            data: tasks,
            count: tasks.length
        })

    } catch (error) {
        console.error('[getAllTasks]', error)
        res.status(500).json({ success: false, message: 'Failed to fetch tasks' })
    }
}

// ── GET TASK BY ID ────────────────────────────────────────────
// GET /api/tasks/:id
export const getTaskById = async (req, res) => {
    try {
        const task = await Task.findOne({
            _id: req.params.id,
            userId: req.user._id  // SECURITY: ensure task belongs to this user
        })

        if (!task) {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            })
        }

        res.json({ success: true, message: 'Task fetched', data: task })

    } catch (error) {
        console.error('[getTaskById]', error)
        // CastError happens when :id is not a valid MongoDB ObjectId
        if (error.name === 'CastError') {
            return res.status(400).json({ success: false, message: 'Invalid task ID' })
        }
        res.status(500).json({ success: false, message: 'Failed to fetch task' })
    }
}

// ── UPDATE TASK ───────────────────────────────────────────────
// PUT /api/tasks/:id
// Body: { title?, description?, priority?, dueDate?, completed? }
export const updateTask = async (req, res) => {
    try {
        const { title, description, priority, dueDate, completed } = req.body

        // Validate at least one field is being updated
        if (!title && description === undefined && !priority && !dueDate && completed === undefined) {
            return res.status(400).json({
                success: false,
                message: 'Provide at least one field to update'
            })
        }

        if (priority && !['low', 'medium', 'high'].includes(priority)) {
            return res.status(400).json({
                success: false,
                message: 'Priority must be low, medium, or high'
            })
        }

        // Build update object — only include fields that were provided
        const updates = {}
        if (title) updates.title = title.trim()
        if (description !== undefined) updates.description = description.trim()
        if (priority) updates.priority = priority
        if (dueDate !== undefined) updates.dueDate = dueDate || null
        if (completed !== undefined) updates.completed = completed

        const task = await Task.findOneAndUpdate(
            { _id: req.params.id, userId: req.user._id },
            updates,
            {
                new: true,            // return updated document
                runValidators: true   // run schema validators on update
            }
        )

        if (!task) {
            return res.status(404).json({ success: false, message: 'Task not found' })
        }

        res.json({ success: true, message: 'Task updated successfully', data: task })

    } catch (error) {
        console.error('[updateTask]', error)
        if (error.name === 'CastError') {
            return res.status(400).json({ success: false, message: 'Invalid task ID' })
        }
        res.status(500).json({ success: false, message: 'Failed to update task' })
    }
}

// ── TOGGLE COMPLETE ───────────────────────────────────────────
// PATCH /api/tasks/:id/toggle
// Flips the completed field: true → false, false → true
export const toggleComplete = async (req, res) => {
    try {
        const task = await Task.findOne({
            _id: req.params.id,
            userId: req.user._id
        })

        if (!task) {
            return res.status(404).json({ success: false, message: 'Task not found' })
        }

        // Toggle the boolean value
        task.completed = !task.completed
        await task.save()  // triggers validators and updates updatedAt

        res.json({
            success: true,
            message: `Task marked as ${task.completed ? 'completed' : 'active'}`,
            data: task
        })

    } catch (error) {
        console.error('[toggleComplete]', error)
        if (error.name === 'CastError') {
            return res.status(400).json({ success: false, message: 'Invalid task ID' })
        }
        res.status(500).json({ success: false, message: 'Failed to toggle task' })
    }
}

// ── DELETE TASK ───────────────────────────────────────────────
// DELETE /api/tasks/:id
export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({
            _id: req.params.id,
            userId: req.user._id  // SECURITY: only delete own tasks
        })

        if (!task) {
            return res.status(404).json({ success: false, message: 'Task not found' })
        }

        res.json({
            success: true,
            message: 'Task deleted successfully',
            data: task
        })

    } catch (error) {
        console.error('[deleteTask]', error)
        if (error.name === 'CastError') {
            return res.status(400).json({ success: false, message: 'Invalid task ID' })
        }
        res.status(500).json({ success: false, message: 'Failed to delete task' })
    }
}
