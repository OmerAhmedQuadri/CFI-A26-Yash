# INTERVIEW_PREP.md — Complete Q&A Guide for Tasky

All answers use examples from this project's actual code.

---

## SECTION 1: DOM & Browser

### Q1: What is the DOM?

**Concise answer:** The DOM (Document Object Model) is a tree-shaped in-memory representation of an HTML document that JavaScript can read and manipulate.

**Beginner:** When the browser loads `dashboard.html`, it reads the HTML and builds a tree of objects in memory. Each tag becomes a node. JavaScript can then add/remove/modify these nodes — that's DOM manipulation.

**Advanced:** The DOM is an API specified by W3C, not part of JavaScript itself. JS accesses it through the global `document` object. The browser re-renders the page whenever the DOM changes (this is called a reflow/repaint and is expensive — batch DOM changes when possible).

**From our code:**
```js
// app.js
tasksList.innerHTML = filtered.map(task => createTaskHTML(task)).join('')
// We set innerHTML to re-render the entire list in one DOM operation
// Better than creating elements one-by-one (multiple reflows)
```

**Common mistake:** Querying DOM inside a loop:
```js
// BAD - queries DOM 100 times
for (let i = 0; i < 100; i++) {
    document.getElementById('list').style.color = 'red'
}
// GOOD - query once, then loop
const list = document.getElementById('list')
for (let i = 0; i < 100; i++) { list.style.color = 'red' }
```

---

### Q2: What is Event Bubbling?

**Concise answer:** When an event fires on a child element, it "bubbles up" through all ancestor elements, triggering their listeners for the same event type.

**Beginner:** Click a button inside a div — both the button's click listener AND the div's click listener fire. The event travels upward through the DOM tree.

**Advanced:** Events have 3 phases: capture (top → target), target (the clicked element), bubble (target → top). `addEventListener(event, fn, true)` uses capture phase; default (false) uses bubble. `event.stopPropagation()` stops bubbling.

**From our code:**
```js
// app.js — Event DELEGATION uses bubbling
tasksList.addEventListener('click', (event) => {
    // event.target = the SPECIFIC element clicked (could be button, icon, etc.)
    // event.currentTarget = tasksList (where listener is attached)
    const actionEl = event.target.closest('[data-action]')
    // .closest() traverses UP the DOM tree to find nearest matching element
})
```

---

### Q3: What is Event Delegation and why use it?

**Concise answer:** Attaching a single event listener to a parent element to handle events for dynamically created child elements, leveraging event bubbling.

**Beginner:** Instead of adding a click listener to each of 100 task cards individually, we add ONE listener to the container. Clicks on any card bubble up to the container.

**Advanced benefits:**
- Memory efficient (1 listener vs N listeners)
- Works for dynamically added elements (innerHTML replacement removes old listeners)
- Cleaner code — one place to handle all task interactions

**From our code:**
```js
// app.js
// We replace innerHTML entirely on each renderTasks() call.
// If we added listeners per-task-card, they'd be lost on re-render.
// With delegation on tasksList, it always works regardless of how many
// times innerHTML is replaced.
tasksList.addEventListener('click', (event) => {
    const actionEl = event.target.closest('[data-action]')
    if (!actionEl) return
    const action = actionEl.dataset.action  // 'toggle', 'edit', 'delete'
    const taskId = actionEl.dataset.id
    // ...
})
```

**Common mistake:** Not checking if the clicked element has the attribute:
```js
// Without the null check, clicking anywhere in tasksList causes errors
if (!actionEl) return  // essential guard
```

---

### Q4: What is the Fetch API?

**Concise answer:** A browser-native API for making HTTP requests, returning Promises.

**Beginner:** `fetch()` is how frontend JS talks to backend APIs. It replaces the older XMLHttpRequest with a cleaner, Promise-based interface.

**Advanced:** `fetch()` only rejects on network errors (server down, DNS failure). HTTP error codes (400, 500) still resolve the Promise — you must check `response.ok` or `response.status`.

**From our code:**
```js
// auth.js
const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
})
const data = await response.json()  // parse JSON body (also async!)
```

**apiFetch helper in app.js:**
```js
// We built a wrapper that adds the Authorization header automatically
async function apiFetch(url, options = {}) {
    const config = {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            ...options.headers  // allow overrides
        }
    }
    return fetch(url, config).then(r => r.json())
}
```

**Common mistake:** Forgetting that `response.json()` is also async:
```js
const data = response.json()  // WRONG - data is a Promise
const data = await response.json()  // CORRECT
```

---

### Q5: What is localStorage vs sessionStorage vs cookies?

| Feature | localStorage | sessionStorage | Cookies |
|---------|-------------|----------------|---------|
| Capacity | ~5MB | ~5MB | ~4KB |
| Lifetime | Forever | Until tab closes | Configurable |
| Sent with requests? | No | No | Yes (auto) |
| Accessible in JS? | Yes | Yes | Yes (if not httpOnly) |
| Scope | Origin | Tab + Origin | Domain configurable |

**From our code:**
```js
// auth.js — storing token after login
localStorage.setItem('tasky_token', token)

// app.js — reading token on every page load
const token = localStorage.getItem('tasky_token')

// logout — clearing stored data
localStorage.removeItem('tasky_token')
```

**Why we use localStorage:**
- Persists across page refreshes and browser restarts
- Not automatically sent with requests (we send it manually in headers)
- Simple key-value API

**Security consideration:** localStorage is vulnerable to XSS — if attacker injects JS, they can steal your token. HttpOnly cookies prevent this but need server-side handling. For this learning project, localStorage is fine. For production apps, consider httpOnly cookies.

---

## SECTION 2: JavaScript Concepts

### Q6: What are Promises and async/await?

**Concise answer:** Promises are objects representing eventual completion/failure of async operations. async/await is syntax sugar over Promises.

**Beginner:** JavaScript is single-threaded. When you fetch data from a server, you can't freeze everything and wait. A Promise says "I'll give you the result when it's ready." async/await makes this look like synchronous code.

**Advanced:** A Promise has 3 states: pending → fulfilled (resolved) or rejected. `async` functions always return a Promise. `await` pauses that function's execution until the awaited Promise settles, then resumes.

**From our code:**
```js
// auth.js - async/await pattern
async function handleLogin() {
    try {
        const response = await fetch(...)    // pauses here, handles other requests
        const data = await response.json()   // pauses again
        localStorage.setItem('token', data.token)
    } catch (error) {
        showError('Network error')           // catches any rejection
    } finally {
        setLoading(false)                    // ALWAYS runs
    }
}
```

**Without async/await (Promise chains):**
```js
fetch('/api/auth/login')
    .then(response => response.json())
    .then(data => { localStorage.setItem('token', data.token) })
    .catch(error => { showError('Network error') })
    .finally(() => { setLoading(false) })
```
Both are equivalent. async/await is more readable.

---

### Q7: What are Closures?

**Concise answer:** A closure is when a function retains access to variables from its outer scope, even after the outer function has returned.

**Beginner:** Think of it as a backpack. When a function is created, it packs up all the variables it can "see" and carries them wherever it goes.

**Advanced:** Closures are how JavaScript implements private state. The inner function "closes over" the outer variables.

**From our code:**
```js
// app.js
const token = localStorage.getItem('tasky_token')  // outer variable

async function apiFetch(url, options = {}) {
    // apiFetch is a closure — it "closes over" the `token` variable
    // Even if token changes in localStorage, this uses the value
    // that was captured when the function was defined
    headers: { 'Authorization': `Bearer ${token}` }
}

// Another closure example — debounce
let debounceTimer  // outer variable

searchInput.addEventListener('input', () => {
    // This arrow function closes over debounceTimer
    clearTimeout(debounceTimer)   // can access AND modify outer variable
    debounceTimer = setTimeout(() => { renderTasks() }, 300)
})
```

**Classic closure interview question:**
```js
// What does this print?
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000)
}
// Prints: 3, 3, 3 (var is function-scoped, all closures share same i)

// Fix with let:
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000)
}
// Prints: 0, 1, 2 (let is block-scoped, each iteration gets its own i)
```

---

### Q8: What is the Event Loop?

**Concise answer:** The mechanism that allows JavaScript to perform non-blocking I/O operations despite being single-threaded, by offloading operations to the system and executing callbacks when they complete.

**Beginner:** JavaScript can only do one thing at a time (single thread). The event loop is like a traffic controller — when an async operation (like fetch) is done, it queues the callback. When the main thread is free, the event loop picks the next callback.

**Advanced — the components:**
1. **Call Stack:** Where synchronous code executes (LIFO)
2. **Web APIs / libuv:** Where async operations run (setTimeout, fetch, fs.read)
3. **Microtask Queue:** For Promise callbacks (higher priority)
4. **Callback Queue:** For setTimeout, setInterval callbacks

**From our code:**
```js
// server.js / controllers — Node.js event loop
const task = await Task.find({ userId: req.user._id })
// When mongoose sends the DB query:
// 1. Query goes to libuv (OS-level networking)
// 2. Node.js doesn't block — it can handle OTHER incoming requests
// 3. When DB responds, the callback is queued
// 4. Event loop picks it up and resumes execution after `await`
```

```js
// app.js — setTimeout in toast
setTimeout(() => { toast.remove() }, 3000)
// setTimeout is NOT part of JS engine. The browser handles the timer.
// After 3s, the callback is added to the callback queue.
// When call stack is empty, event loop picks it up.
```

---

### Q9: What are Callbacks?

**Concise answer:** Functions passed as arguments to other functions, to be called when an operation completes.

**Beginner:** "Call me back when you're done." You give a function to another function, and it gets called later.

**From our code:**
```js
// Event listeners ARE callbacks
submitBtn.addEventListener('click', function() {  // callback
    // this runs when the click event fires
})

// Array methods take callbacks
tasks.filter(task => !task.completed)  // arrow function is the callback
tasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
tasks.map(task => createTaskHTML(task))
```

**Callback hell (the problem Promises solve):**
```js
// Without Promises — nested callbacks
login(email, password, function(err, user) {
    if (err) return handleError(err)
    getTasks(user.id, function(err, tasks) {
        if (err) return handleError(err)
        updateUI(tasks, function(err) {
            // deeper and deeper...
        })
    })
})
```

---

### Q10: What is Debouncing?

**Concise answer:** A technique to limit how often a function fires by delaying its execution until after a specified wait time has passed since the last call.

**From our code:**
```js
// app.js — search input
let debounceTimer

searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer)         // cancel previous timer
    debounceTimer = setTimeout(() => {  // start new timer
        state.filter.search = searchInput.value
        renderTasks()
    }, 300)  // only fires 300ms after user STOPS typing
})
```

**Why it matters:** Without debounce, typing "meeting" would call `renderTasks()` 7 times (one per character). With debounce, it fires once, 300ms after the user stops.

**vs Throttling:** Throttle fires at most once per interval (e.g., scroll events). Debounce fires only after the action stops.

---

## SECTION 3: Node.js & Express

### Q11: What is Node.js?

**Concise answer:** A JavaScript runtime environment built on Chrome's V8 engine that allows running JavaScript on the server-side.

**Key features for our app:**
- **Non-blocking I/O:** Can handle many simultaneous connections (good for APIs)
- **npm ecosystem:** bcrypt, mongoose, jsonwebtoken all come from npm
- **Same language frontend + backend:** JS everywhere

**From our code:**
```js
// server.js uses Node.js built-ins
import path from 'path'           // Node.js path module
import { fileURLToPath } from 'url'  // Node.js url module
// ESM doesn't have __dirname by default in Node.js
const __dirname = path.dirname(fileURLToPath(import.meta.url))
```

---

### Q12: What is Express.js?

**Concise answer:** A minimal, unopinionated Node.js web framework that provides routing, middleware, and HTTP utilities.

**What Express adds over raw Node.js http module:**
- Clean routing: `app.get('/path', handler)` vs parsing URLs manually
- Middleware pipeline
- Request/response helpers (`res.json()`, `req.body`, etc.)

**From our code:**
```js
// Without Express (raw Node):
const http = require('http')
http.createServer((req, res) => {
    if (req.url === '/api/tasks' && req.method === 'GET') { /* ... */ }
    // lots of manual parsing...
})

// With Express:
app.get('/api/tasks', authMiddleware, getAllTasks)
// Clean, readable, middleware support built in
```

---

### Q13: What is Middleware?

**Concise answer:** Functions that have access to req, res, and next, forming a pipeline that processes every request before it reaches the final route handler.

**The middleware pipeline:**
```
Request → cors() → express.json() → express.static() → authMiddleware → controller → Response
```

Each middleware either:
1. Calls `next()` to pass control to the next middleware
2. Sends a response with `res.json()` / `res.send()` (short-circuits the pipeline)

**From our code:**
```js
// Global middleware (runs on every request):
app.use(cors())
app.use(express.json())

// Route-specific middleware:
router.use(authMiddleware)  // only for task routes

// Single-route middleware:
router.get('/me', authMiddleware, getMe)
```

**Types of middleware in Tasky:**
- **Built-in:** `express.json()`, `express.static()`
- **Third-party:** `cors()`
- **Custom:** `authMiddleware`
- **Error handler:** `(err, req, res, next) => {}`

---

### Q14: What are REST APIs?

**Concise answer:** An architectural style for web APIs that uses HTTP methods and URLs to define operations on resources.

**REST principles:**
- Resources are nouns: `/api/tasks`, `/api/users`
- HTTP methods define operations:
  - GET = read
  - POST = create
  - PUT = full update
  - PATCH = partial update
  - DELETE = remove
- Stateless: server doesn't remember past requests
- Consistent response format

**From our code (Tasky's REST API):**
```
GET    /api/tasks           → get all tasks
POST   /api/tasks           → create task
GET    /api/tasks/:id       → get specific task
PUT    /api/tasks/:id       → update task (full)
PATCH  /api/tasks/:id/toggle → partial update (toggle completed)
DELETE /api/tasks/:id       → delete task
POST   /api/auth/register   → create user
POST   /api/auth/login      → authenticate
GET    /api/auth/me         → get profile
```

**HTTP Status Codes used:**
```
200 OK        → success (GET, PUT, PATCH, DELETE)
201 Created   → resource created (POST /register, POST /tasks)
400 Bad Request → invalid input
401 Unauthorized → missing/invalid token
404 Not Found → resource doesn't exist
409 Conflict  → duplicate (email already exists)
500 Internal Server Error → server bug
```

---

## SECTION 4: Authentication & Security

### Q15: What is JWT (JSON Web Token)?

**Concise answer:** A compact, self-contained token that encodes user information and is signed cryptographically. The server can verify it without storing sessions.

**Structure:** `header.payload.signature`
```
eyJhbGciOiJIUzI1NiJ9  ← header (base64: {"alg":"HS256"})
.
eyJpZCI6IjY2MTIiLCJlbWFpbCI6Inlhc2hAZ21haWwuY29tIn0  ← payload (base64)
.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c  ← HMAC signature
```

**From our code:**
```js
// utils/jwt.js
export const generateToken = (payload) => {
    return jwt.sign(payload, SECRET, { expiresIn: '7d' })
    // payload = { id, email, name }
    // SECRET = only the server knows this
}

export const verifyToken = (token) => {
    return jwt.verify(token, SECRET)
    // throws if tampered, expired, or wrong signature
}
```

**JWT vs Sessions:**
| | JWT | Sessions |
|--|-----|---------|
| Server stores | Nothing | Session data in DB/memory |
| Scalability | Great (stateless) | Needs sticky sessions or Redis |
| Invalidation | Hard (wait for expiry) | Easy (delete session) |
| Size | Token in every request | Just session ID in cookie |

---

### Q16: What is the difference between Authentication and Authorization?

**Authentication** = "Who are you?" — proving identity
- Login with email + password
- JWT token verification

**Authorization** = "What are you allowed to do?" — checking permissions
- Can this user access THIS task?

**From our code:**
```js
// AUTHENTICATION (auth.middleware.js)
const decoded = verifyToken(token)  // proves user is who they say
const user = await User.findById(decoded.id)
req.user = user  // identity established

// AUTHORIZATION (task.controller.js)
const task = await Task.findOne({
    _id: req.params.id,
    userId: req.user._id  // ensures user can only access THEIR tasks
})
// This is authorization — checking OWNERSHIP
```

---

### Q17: How does bcrypt password hashing work?

**Concise answer:** bcrypt is a slow, salted hashing algorithm designed specifically for passwords. It's computationally expensive by design, making brute-force attacks impractical.

**Salt:** Random data added to the password before hashing. Each user gets a unique salt — even if two users have the same password, their hashes are different. Prevents rainbow table attacks.

**From our code:**
```js
// utils/bcrypt.js
export const hashPassword = async (password) => {
    const hashed = await bcrypt.hash(password, 10)
    // 10 = salt rounds (cost factor)
    // More rounds = slower = harder to brute force
    // Result: "$2b$10$<salt><hash>" — 60-char string
    return hashed
}

export const comparePassword = async (plain, hashed) => {
    return bcrypt.compare(plain, hashed)
    // bcrypt extracts salt from hashed, rehashes plain, compares
    // Returns true/false
}
```

**Why NOT use SHA256 for passwords?**
SHA256 is fast (~10 billion/sec). bcrypt with 10 rounds: ~100ms. If DB is breached:
- SHA256: attacker tries 10 billion passwords/second → cracks most passwords quickly
- bcrypt: attacker tries ~10 passwords/second → practically infeasible

---

### Q18: What is XSS and how do we prevent it?

**Concise answer:** Cross-Site Scripting — injecting malicious JavaScript into web pages via user-supplied content.

**Attack example:**
```
User creates a task titled: <script>document.cookie</script>
If we do: taskEl.innerHTML = task.title
The script executes! Attacker can steal tokens, cookies, etc.
```

**From our code:**
```js
// app.js — escapeHTML prevents XSS
function escapeHTML(str) {
    const div = document.createElement('div')
    div.appendChild(document.createTextNode(str))
    return div.innerHTML
    // Converts: <script> → &lt;script&gt;
    // Rendered as text, not executed as HTML
}

// Usage in createTaskHTML():
`<p class="task-title">${escapeHTML(task.title)}</p>`
```

**Other XSS prevention:**
- Use `.textContent` instead of `.innerHTML` for plain text
- Content Security Policy (CSP) headers
- Validate and sanitize on the server too

---

## SECTION 5: MongoDB & Mongoose

### Q19: What is MongoDB?

**Concise answer:** A NoSQL document database that stores data as BSON (Binary JSON) documents instead of rows and tables.

**From our code:**
```js
// Each task is a document:
{
    "_id": "65f1234567890abcdef12345",  // ObjectId — auto-generated unique ID
    "title": "Finish interview prep",
    "priority": "high",
    "completed": false,
    "userId": "65e0987654321abcdef98765",  // reference to User document
    "createdAt": "2024-03-13T10:00:00.000Z",
    "updatedAt": "2024-03-13T10:00:00.000Z"
}
```

**SQL vs MongoDB:**
```sql
-- SQL
SELECT * FROM tasks WHERE user_id = 123 AND priority = 'high'
```
```js
// MongoDB
Task.find({ userId: '65e0987...', priority: 'high' })
```

---

### Q20: What is Mongoose and what is an ODM?

**ODM (Object Document Mapper):** Like an ORM for SQL, but for document databases. Mongoose maps MongoDB documents to JavaScript objects.

**What Mongoose adds:**
1. **Schema validation** — ensure documents have correct shape
2. **Types** — `String`, `Number`, `Date`, `Boolean`, `ObjectId`
3. **Virtuals** — computed properties
4. **Middleware (hooks)** — run code before/after save, find, etc.
5. **Instance methods** — `user.save()`, `task.remove()`
6. **Static methods** — `User.find()`, `Task.create()`

**From our code:**
```js
// models/Task.js — schema enforces data integrity
const taskSchema = new mongoose.Schema({
    title: { type: String, required: true, maxlength: 200 },
    priority: { enum: ['low', 'medium', 'high'] },
    userId: { type: ObjectId, ref: 'User', required: true }
})

// Without schema: any task document could be missing title,
// have invalid priority, or have no userId — chaos in production
```

---

### Q21: What are MongoDB Query Operators?

**Common operators used in Tasky:**

```js
// $regex — pattern matching
filter.title = { $regex: req.query.search, $options: 'i' }
// Matches any title containing the search term (case-insensitive)

// $in — matches any value in array (not used but important to know)
Task.find({ priority: { $in: ['high', 'medium'] } })

// Comparison operators
Task.find({ dueDate: { $lt: new Date() } })  // overdue tasks

// $or — multiple conditions
Task.find({ $or: [{ priority: 'high' }, { dueDate: { $lt: new Date() } }] })
```

---

## SECTION 6: Async JavaScript Deep Dive

### Q22: What is the difference between .then() and async/await?

Both handle Promises. async/await is syntactic sugar over .then() chains.

```js
// .then() style
apiFetch('/api/tasks')
    .then(data => {
        state.tasks = data.data
        renderTasks()
    })
    .catch(error => showToast('Error', 'error'))

// async/await style (our code)
const data = await apiFetch('/api/tasks')
state.tasks = data.data
renderTasks()
```

async/await is preferred for:
- Readability (looks synchronous)
- Error handling (try/catch vs .catch())
- Complex async flows (no callback pyramid)

---

### Q23: What is the difference between Promise.all() and sequential awaits?

```js
// Sequential (one at a time — total time = sum of each)
const user = await fetchUser()    // 200ms
const tasks = await fetchTasks()  // 300ms
// Total: 500ms

// Parallel with Promise.all (all start together — total = max of each)
const [user, tasks] = await Promise.all([fetchUser(), fetchTasks()])
// Total: 300ms

// When to use Promise.all:
// - Operations are independent of each other
// - You want results of all of them
```

---

## SECTION 7: Security Best Practices

### Q24: What security practices does Tasky implement?

1. **Password hashing** (bcrypt, not md5/sha)
2. **JWT for stateless auth** (not plain session IDs)
3. **XSS prevention** (escapeHTML in frontend)
4. **User data isolation** (every task query includes `userId: req.user._id`)
5. **Error message consistency** (same message for "email not found" and "wrong password")
6. **Environment variables** (secrets in .env, not hardcoded)
7. **Input validation** (both client-side and server-side)
8. **Authorization header** (Bearer token, not query param — doesn't appear in logs)

### Q25: What is CORS and why do we need it?

**CORS (Cross-Origin Resource Sharing):** A browser security feature that blocks web pages from making requests to a different origin than the page was served from.

**Origin = protocol + domain + port**
`http://localhost:3000` ≠ `http://localhost:5000` (different port = different origin)

**From our code:**
```js
// server.js
app.use(cors())
// This adds headers to every response:
// Access-Control-Allow-Origin: *
// Without this, browsers would block API calls
// that come from a different origin
```

**In production:** Set specific allowed origins instead of `*`:
```js
app.use(cors({ origin: 'https://yourdomain.com' }))
```

---

## QUICK REFERENCE: Common Interview Questions

| Question | One-line Answer |
|----------|-----------------|
| What is the event loop? | Mechanism allowing async I/O in single-threaded JS |
| var vs let vs const? | var=function-scoped/hoisted, let/const=block-scoped |
| What is hoisting? | Variable/function declarations moved to top of scope |
| null vs undefined? | null=intentional absence, undefined=not assigned yet |
| == vs ===? | == converts types, === checks type AND value |
| What is a pure function? | Same input always gives same output, no side effects |
| What is idempotent? | Same request = same result (GET, PUT, DELETE are idempotent) |
| What is REST? | Architectural style using HTTP methods on resources |
| What is a schema? | Blueprint defining the shape/validation of data |
| What is middleware? | Function between request and handler in Express |
| What is a JWT? | Self-contained signed token carrying user info |
| What is bcrypt? | Slow, salted password hashing algorithm |
| What is SQL injection? | Injecting SQL code via user input (use parameterized queries) |
| What is XSS? | Injecting JS via user content (use escapeHTML) |
| What is CSRF? | Forged requests using victim's browser session |
| What is CORS? | Browser policy blocking cross-origin requests |
| HTTP 401 vs 403? | 401=not authenticated, 403=authenticated but not authorized |
| HTTP 404 vs 400? | 404=resource not found, 400=bad request from client |
| What is an index in DB? | Data structure for faster lookups (like a book's index) |
| What are MongoDB ObjectIds? | 12-byte unique identifiers auto-generated by MongoDB |
