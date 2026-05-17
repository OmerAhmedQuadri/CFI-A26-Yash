// ============================================================
// utils/bcrypt.js — Password hashing utilities
//
// INTERVIEW CONCEPT: Why hash passwords?
// → If your database is leaked, plain passwords are exposed.
// → Hashed passwords cannot be reversed (one-way function).
//
// bcrypt adds a "salt" (random data) before hashing.
// This prevents rainbow table attacks (precomputed hash lookups).
//
// SALT ROUNDS (cost factor): determines how slow the hashing is.
// Higher rounds = more secure but slower.
// 10 rounds is ~100ms — acceptable for login, too slow for attackers
// to brute-force millions of hashes quickly.
//
// INTERVIEW: MD5/SHA1 are NOT appropriate for passwords because
// they're fast (attackers can try billions/sec). bcrypt is slow by design.
// ============================================================

import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config()

const SALT_ROUNDS = parseInt(process.env.BCRYPT_SALT_ROUNDS) || 10

// Hashes a plain text password
// Returns the hashed string to store in DB
export const hashPassword = async (plainPassword) => {
    // bcrypt.hash() generates a random salt and hashes: salt + password
    const hashed = await bcrypt.hash(plainPassword, SALT_ROUNDS)
    return hashed
}

// Compares a plain text password against a stored hash
// Returns true if they match, false otherwise
export const comparePassword = async (plainPassword, hashedPassword) => {
    // bcrypt.compare() extracts the salt from hashedPassword and rehashes
    // plainPassword, then compares — you never need to store the salt separately
    const match = await bcrypt.compare(plainPassword, hashedPassword)
    return match
}
