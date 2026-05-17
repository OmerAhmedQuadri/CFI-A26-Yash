// ============================================================
// auth.js — Handles login and register form logic
//
// INTERVIEW CONCEPT: This file is shared by both login and
// register pages. It detects which page is active by checking
// which form exists in the DOM.
//
// KEY CONCEPTS DEMONSTRATED:
// 1. fetch() API — making HTTP requests from the browser
// 2. async/await — handling asynchronous operations cleanly
// 3. DOM manipulation — reading form data, showing errors
// 4. localStorage — persisting the JWT token between page loads
// 5. Form validation — client-side before hitting the server
//
// INTERVIEW: What is localStorage?
// → A key-value store in the browser that persists across sessions.
// → Unlike sessionStorage (cleared on tab close) or cookies (sent
//   with every request), localStorage survives page refreshes.
// → Data is stored as strings — use JSON.stringify/parse.
// ============================================================

// Base URL for all API calls
// Since frontend is served from the same Express server,
// we don't need the full origin — just the path
const API_BASE = '/api/auth'

// Detect current page by checking which form exists
const loginForm = document.getElementById('login-form')
const registerForm = document.getElementById('register-form')
const errorMsg = document.getElementById('error-msg')
const submitBtn = document.getElementById('submit-btn')

// ── REDIRECT IF ALREADY LOGGED IN ────────────────────────────
// If a valid token exists, send user straight to dashboard
const existingToken = localStorage.getItem('tasky_token')
if (existingToken) {
    window.location.href = '/dashboard.html'
}

// ── UTILITY: Show error message ───────────────────────────────
function showError(message) {
    errorMsg.textContent = message
    errorMsg.classList.remove('hidden')
}

// ── UTILITY: Set button loading state ────────────────────────
// INTERVIEW: This is good UX — disabling the button prevents
// duplicate form submissions while the request is in flight
function setLoading(isLoading) {
    submitBtn.disabled = isLoading
    submitBtn.textContent = isLoading ? 'Please wait...' : submitBtn.dataset.defaultText
}

// Save original button text so we can restore it
if (submitBtn) {
    submitBtn.dataset.defaultText = submitBtn.textContent
}

// ── LOGIN HANDLER ─────────────────────────────────────────────
if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
        // INTERVIEW: preventDefault() stops the default HTML form
        // behavior (page reload + GET request with form data in URL).
        // We handle the submission ourselves with fetch().
        event.preventDefault()

        // Hide previous error
        errorMsg.classList.add('hidden')

        const email = document.getElementById('email').value.trim()
        const password = document.getElementById('password').value

        // Client-side validation before API call
        if (!email || !password) {
            return showError('Please enter your email and password.')
        }

        setLoading(true)

        try {
            // INTERVIEW: fetch() is the browser's built-in HTTP client.
            // It returns a Promise that resolves with a Response object.
            // We must call .json() to parse the JSON body (also async).
            const response = await fetch(`${API_BASE}/login`, {
                method: 'POST',
                // Headers tell the server what format we're sending
                headers: { 'Content-Type': 'application/json' },
                // JSON.stringify converts JS object to JSON string
                body: JSON.stringify({ email, password })
            })

            // response.json() parses the response body as JSON
            const data = await response.json()

            if (data.success) {
                // Store the JWT token in localStorage
                localStorage.setItem('tasky_token', data.data.token)
                // Store user info for quick access without an API call
                localStorage.setItem('tasky_user', JSON.stringify(data.data.user))
                // Redirect to dashboard
                window.location.href = '/dashboard.html'
            } else {
                showError(data.message || 'Login failed. Please try again.')
            }

        } catch (error) {
            // Network error (server down, no internet, etc.)
            showError('Network error. Is the server running?')
            console.error('[login error]', error)
        } finally {
            // INTERVIEW: finally block ALWAYS runs, even if try throws.
            // Perfect for cleanup like resetting the loading state.
            setLoading(false)
        }
    })
}

// ── REGISTER HANDLER ──────────────────────────────────────────
if (registerForm) {
    registerForm.addEventListener('submit', async (event) => {
        event.preventDefault()
        errorMsg.classList.add('hidden')

        const name = document.getElementById('name').value.trim()
        const email = document.getElementById('email').value.trim()
        const password = document.getElementById('password').value

        // Client-side validation
        if (!name || name.length < 2) {
            return showError('Please enter your full name (at least 2 characters).')
        }
        if (!email || !email.includes('@')) {
            return showError('Please enter a valid email address.')
        }
        if (!password || password.length < 6) {
            return showError('Password must be at least 6 characters.')
        }

        setLoading(true)

        try {
            const response = await fetch(`${API_BASE}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            })

            const data = await response.json()

            if (data.success) {
                // Auto-login: store token and redirect to dashboard
                localStorage.setItem('tasky_token', data.data.token)
                localStorage.setItem('tasky_user', JSON.stringify(data.data.user))
                window.location.href = '/dashboard.html'
            } else {
                showError(data.message || 'Registration failed. Try a different email.')
            }

        } catch (error) {
            showError('Network error. Is the server running?')
            console.error('[register error]', error)
        } finally {
            setLoading(false)
        }
    })
}
