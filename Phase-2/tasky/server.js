// ============================================================
// server.js — Entry point for the Tasky application
//
// INTERVIEW CONCEPT: This is where Express is initialized.
// Express is a "web framework" that sits on top of Node's
// built-in http module and makes routing/middleware easy.
//
// Execution order matters here:
//  1. Middleware (json parser, cors) runs FIRST on every request
//  2. Static file server handles HTML/CSS/JS files
//  3. API routes handle /api/* requests
//  4. The error handler catches anything that goes wrong
// ============================================================

import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

// Importing these side-effect modules runs dbConnect() immediately
import './dbConnect.js'

import authRouter from './routes/auth.routes.js'
import taskRouter from './routes/task.routes.js'

// ESM doesn't have __dirname by default — we recreate it
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load environment variables from .env file into process.env
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// ── GLOBAL MIDDLEWARE ────────────────────────────────────────
// CORS: allows browser requests from different origins
// INTERVIEW: CORS is a security feature browsers enforce.
// The server must explicitly allow cross-origin requests.
app.use(cors())

// Parses incoming JSON request bodies into req.body
// Without this, req.body would be undefined for JSON requests
app.use(express.json())

// Serve the /public folder as static files (HTML, CSS, JS)
// When browser requests /dashboard.html, Express finds it here
app.use(express.static(path.join(__dirname, 'public')))

// ── API ROUTES ───────────────────────────────────────────────
app.use('/api/auth', authRouter)   // /api/auth/login, /api/auth/register ...
app.use('/api/tasks', taskRouter)  // /api/tasks/, /api/tasks/:id ...

// ── 404 HANDLER for unknown API routes ──────────────────────
app.use('/api', (req, res) => {
    res.status(404).json({ success: false, message: 'API route not found' })
})

// ── GLOBAL ERROR HANDLER ─────────────────────────────────────
// INTERVIEW: In Express, a function with 4 params (err, req, res, next)
// is recognized as an error handler. Call next(err) anywhere to reach it.
app.use((err, req, res, next) => {
    console.error('[ERROR]', err.stack)
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal server error'
    })
})

app.listen(PORT, () => {
    console.log(`\n🚀 Tasky server running → http://localhost:${PORT}`)
    console.log(`   Dashboard  → http://localhost:${PORT}/dashboard.html`)
    console.log(`   API Docs   → see README.md\n`)
})
