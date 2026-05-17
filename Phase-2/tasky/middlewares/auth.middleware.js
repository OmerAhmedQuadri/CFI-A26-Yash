// ============================================================
// middlewares/auth.middleware.js — JWT Authentication Guard
//
// INTERVIEW CONCEPT: Middleware is a function that runs BETWEEN
// the incoming request and the final route handler.
//
// Express middleware signature: (req, res, next) => {}
//  - req: the incoming request object
//  - res: the outgoing response object
//  - next: call this to pass control to the next middleware/handler
//
// This middleware:
//  1. Reads the JWT from the Authorization header
//  2. Verifies it using our secret key
//  3. Finds the user in DB
//  4. Attaches user to req.user so controllers can use it
//  5. Calls next() to continue — or sends 401 if auth fails
//
// INTERVIEW: What is the difference between authentication and authorization?
// Authentication = "Who are you?" (verifying identity via token/password)
// Authorization = "What can you do?" (checking permissions/roles)
// This middleware does AUTHENTICATION.
// ============================================================

import { verifyToken } from '../utils/jwt.js'
import User from '../models/User.js'

const authMiddleware = async (req, res, next) => {
    try {
        // Extract the Authorization header: "Bearer eyJhbGci..."
        const authHeader = req.headers['authorization']

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                message: 'Access denied. No token provided.'
            })
        }

        // Split "Bearer TOKEN" → grab just the TOKEN part
        const token = authHeader.split(' ')[1]

        // verifyToken() throws if token is invalid or expired
        // The decoded payload contains: { id, email, name, iat, exp }
        const decoded = verifyToken(token)

        // Re-fetch user from DB to ensure account still exists and is current
        // INTERVIEW: Why not just trust the token payload?
        // → User could be deleted after token was issued
        // → Token payload could be stale (name changed, etc.)
        const user = await User.findById(decoded.id).select('-password')

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'User not found. Token is invalid.'
            })
        }

        // Attach user to request object — controllers access req.user
        req.user = user

        // Call next() to proceed to the actual route handler
        next()

    } catch (error) {
        // jwt.verify() throws specific errors:
        // JsonWebTokenError → invalid token
        // TokenExpiredError → token has expired
        return res.status(401).json({
            success: false,
            message: error.name === 'TokenExpiredError'
                ? 'Token has expired. Please login again.'
                : 'Invalid token. Please login again.'
        })
    }
}

export default authMiddleware
