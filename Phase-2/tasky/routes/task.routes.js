// ============================================================
// routes/task.routes.js — Task route definitions
//
// INTERVIEW CONCEPT: This file uses router.use(authMiddleware)
// to protect ALL task routes at once.
//
// Without authMiddleware, anyone could CRUD any user's tasks.
// This is AUTHORIZATION at the route level.
//
// Route ordering matters in Express:
//  router.get('/') matches GET /api/tasks/
//  router.get('/:id') matches GET /api/tasks/abc123
//  router.patch('/:id/toggle') must come BEFORE /:id
//  otherwise /toggle would be treated as an :id value
// ============================================================

import express from 'express'
import {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    toggleComplete,
    deleteTask
} from '../controllers/task.controller.js'
import authMiddleware from '../middlewares/auth.middleware.js'

const router = express.Router()

// Apply authMiddleware to ALL routes in this router
// INTERVIEW: This is cleaner than adding authMiddleware to each route individually
router.use(authMiddleware)

// GET    /api/tasks           → get all tasks (supports ?priority= &completed= &search= &sort=)
// POST   /api/tasks           → create new task
router.route('/').get(getAllTasks).post(createTask)

// PATCH  /api/tasks/:id/toggle  → toggle complete status
// NOTE: /toggle must be registered BEFORE /:id to prevent routing conflict
router.patch('/:id/toggle', toggleComplete)

// GET    /api/tasks/:id       → get single task
// PUT    /api/tasks/:id       → full update task
// DELETE /api/tasks/:id       → delete task
router.route('/:id').get(getTaskById).put(updateTask).delete(deleteTask)

export default router
