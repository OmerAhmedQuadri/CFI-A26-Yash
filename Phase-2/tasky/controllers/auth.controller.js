// ============================================================
// controllers/auth.controller.js — Auth business logic
//
// INTERVIEW CONCEPT: Controllers handle the BUSINESS LOGIC of a route.
// They should not know about routing (that's routes/*.js)
// and should not contain DB schema definitions (that's models/).
//
// This separation follows the MVC pattern:
//  M = Model (models/User.js) — data layer
//  V = View (public/*.html) — presentation layer
//  C = Controller (this file) — business logic layer
//
// INTERVIEW: What is the request-response cycle?
// 1. Client sends HTTP request
// 2. Express parses it (middleware)
// 3. Route matches URL → calls controller
// 4. Controller reads req, calls DB, builds response
// 5. res.json() sends HTTP response back to client
// ============================================================

import User from '../models/User.js'
import { hashPassword, comparePassword } from '../utils/bcrypt.js'
import { generateToken } from '../utils/jwt.js'

// ── REGISTER ─────────────────────────────────────────────────
// POST /api/auth/register
// Body: { name, email, password }
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body

        // Validate required fields
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Name, email, and password are required'
            })
        }

        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                message: 'Password must be at least 6 characters'
            })
        }

        // Check if email already exists
        // findOne() returns null if not found — falsy → proceed
        const existingUser = await User.findOne({ email: email.toLowerCase() })
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: 'An account with this email already exists'
            })
        }

        // Hash the password before storing — NEVER store plain text
        const hashed = await hashPassword(password)

        // Create user in DB
        const user = await User.create({
            name: name.trim(),
            email: email.toLowerCase().trim(),
            password: hashed
        })

        // Generate JWT for immediate login after registration
        const token = generateToken({
            id: user._id,
            email: user.email,
            name: user.name
        })

        // Return user data (without password) and token
        res.status(201).json({
            success: true,
            message: 'Account created successfully',
            data: {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    createdAt: user.createdAt
                },
                token
            }
        })

    } catch (error) {
        console.error('[register]', error)
        // Mongoose duplicate key error (email unique constraint)
        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                message: 'Email already in use'
            })
        }
        res.status(500).json({
            success: false,
            message: 'Registration failed. Please try again.'
        })
    }
}

// ── LOGIN ─────────────────────────────────────────────────────
// POST /api/auth/login
// Body: { email, password }
export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Email and password are required'
            })
        }

        // Find user by email
        const user = await User.findOne({ email: email.toLowerCase() })

        // SECURITY: Use the same error message whether email doesn't exist
        // OR password is wrong — never reveal which field is wrong
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            })
        }

        // Compare the provided password with the stored hash
        const isPasswordValid = await comparePassword(password, user.password)
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            })
        }

        // Generate JWT token
        const token = generateToken({
            id: user._id,
            email: user.email,
            name: user.name
        })

        res.json({
            success: true,
            message: 'Login successful',
            data: {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email
                },
                token
            }
        })

    } catch (error) {
        console.error('[login]', error)
        res.status(500).json({
            success: false,
            message: 'Login failed. Please try again.'
        })
    }
}

// ── GET ME ────────────────────────────────────────────────────
// GET /api/auth/me  (protected — requires valid JWT)
// Returns current logged-in user's profile
export const getMe = async (req, res) => {
    try {
        // req.user is set by authMiddleware
        // We already excluded password in the middleware with .select('-password')
        res.json({
            success: true,
            message: 'User profile fetched',
            data: {
                id: req.user._id,
                name: req.user.name,
                email: req.user.email,
                createdAt: req.user.createdAt
            }
        })
    } catch (error) {
        console.error('[getMe]', error)
        res.status(500).json({ success: false, message: 'Failed to fetch profile' })
    }
}
