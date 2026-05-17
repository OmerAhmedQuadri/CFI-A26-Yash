// ============================================================
// utils/jwt.js — JWT (JSON Web Token) utility functions
//
// INTERVIEW CONCEPT: JWT is a stateless authentication mechanism.
// A JWT is a base64-encoded string with 3 parts: header.payload.signature
//
// Header: algorithm info (RS256, HS256)
// Payload: the actual data (user id, role, expiry)
// Signature: HMAC of (header + payload) using the secret key
//
// STATELESS means the server doesn't store sessions in memory or DB.
// Any server can verify any token using the same secret.
//
// Flow:
//  1. User logs in → server creates token → sends to client
//  2. Client stores token (localStorage in our case)
//  3. Client sends token on every protected request
//  4. Server verifies token → extracts user id → serves request
//
// INTERVIEW: What if a token is stolen?
// → It's valid until expiry. This is why short expiry + HTTPS matters.
// → Refresh token pattern solves this for production apps.
// ============================================================

import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const SECRET = process.env.JWT_SECRET
const EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d'

// Create a new JWT token with user data as payload
export const generateToken = (payload) => {
    // jwt.sign(payload, secret, options)
    // The payload is visible to anyone (base64 decoded), so never put passwords here
    return jwt.sign(payload, SECRET, { expiresIn: EXPIRES_IN })
}

// Verify a token and return the decoded payload
// Throws an error if token is invalid or expired
export const verifyToken = (token) => {
    // jwt.verify() throws JsonWebTokenError if invalid
    // and TokenExpiredError if expired — both are caught by auth middleware
    return jwt.verify(token, SECRET)
}
