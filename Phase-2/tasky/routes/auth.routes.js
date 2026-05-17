// ============================================================
// routes/auth.routes.js — Auth route definitions
//
// INTERVIEW CONCEPT: Routes are URL → handler mappings.
// They should be thin — just define the HTTP method, path,
// and which controller function handles it.
// Business logic lives in controllers, NOT here.
//
// express.Router() creates a mini-app that handles a subset of routes.
// This router is mounted at /api/auth in server.js, so:
//   router.post('/register') → handles POST /api/auth/register
//   router.post('/login')    → handles POST /api/auth/login
//   router.get('/me')        → handles GET  /api/auth/me
// ============================================================

import express from 'express'
import { register, login, getMe } from '../controllers/auth.controller.js'
import authMiddleware from '../middlewares/auth.middleware.js'

const router = express.Router()

// Public routes — no authentication required
router.post('/register', register)
router.post('/login', login)

// Protected route — authMiddleware runs first, then getMe
// If authMiddleware calls next(), getMe runs
// If authMiddleware calls res.status(401).json(), getMe never runs
router.get('/me', authMiddleware, getMe)

export default router
