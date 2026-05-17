# PROJECT_EXPLANATION.md — Every File Explained

## Overview

Tasky is a full-stack task management app. Here's how all the pieces fit together:

```
Browser ← HTTP → Express Server ← Mongoose → MongoDB Atlas
   ↑                    ↑
auth.js / app.js     server.js
(public/)            (backend)
```

---

## BACKEND FILES

---

### `server.js` — The Entry Point

**Why it exists:** Every Express app needs a central file that wires everything together.

**What problem it solves:** Without this, you'd have no server. This file:
- Creates the Express application
- Configures global middleware
- Connects routes to the app
- Starts listening on a port

**How it works:**
```js
const app = express()
app.use(cors())           // allow browser requests
app.use(express.json())   // parse JSON bodies
app.use(express.static()) // serve HTML/CSS/JS files
app.use('/api/auth', authRouter)  // delegate to router
app.listen(3000)
```

**Execution flow:** This file runs first. All other imports cascade from here.

**Interview question:** "What does `express.json()` do?"
→ It's middleware that reads the raw request body, parses it as JSON, and puts the result in `req.body`. Without it, `req.body` is undefined for JSON requests.

---

### `dbConnect.js` — Database Connection

**Why it exists:** MongoDB connection must be established before any DB operations. This separates the connection concern from the app logic.

**What problem it solves:** If DB connection fails, the app should crash immediately with a clear error instead of failing silently on the first DB query.

**How it works:**
```js
await mongoose.connect(process.env.MONGO_URL)
// After this resolves, all Mongoose models can query MongoDB
```

**Key point:** Mongoose maintains a connection pool internally. Once connected, `mongoose.connect()` is called only once. All `Model.find()` / `Model.create()` calls reuse this connection.

**Interview question:** "What's the difference between Mongoose and MongoDB driver?"
→ MongoDB driver is the low-level official client (you write raw queries). Mongoose is an ODM (Object Document Mapper) built on top — it adds schemas, validation, middleware hooks, and a nicer API.

---

### `models/User.js` — User Schema

**Why it exists:** Defines the shape of user documents stored in MongoDB.

**What problem it solves:** Without a schema, anyone could insert any data into the users collection. Mongoose schemas enforce structure and validation.

**Key fields:**
- `email: { unique: true, lowercase: true }` — enforces no duplicates, normalizes to lowercase
- `password: String` — stores the HASHED password (never plain text)
- `timestamps: true` — auto-adds `createdAt` and `updatedAt`

**How it connects:**
- `auth.controller.js` uses `User.create()`, `User.findOne()`
- `auth.middleware.js` uses `User.findById()` to verify token

**Interview question:** "Why do we use `select('-password')` when fetching users?"
→ MongoDB returns all fields by default. `-password` tells Mongoose to exclude the password field from the result. We never want to accidentally send a hashed password to the frontend.

---

### `models/Task.js` — Task Schema

**Why it exists:** Defines task documents with a reference (foreign key) to User.

**What problem it solves:** Tasks must belong to users. The `userId` field creates this relationship.

**Key design decisions:**
```js
userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
}
```
This is a "reference" pattern. Alternative is "embedding" (tasks array inside User doc).

**Why reference over embedding here:**
- Tasks can grow infinitely (no MongoDB 16MB document limit issue)
- Can query tasks independently without loading the full user
- Cleaner, more scalable

**The index:**
```js
taskSchema.index({ userId: 1, createdAt: -1 })
```
This makes `Task.find({ userId })` fast even with millions of tasks. Without it, MongoDB scans every document.

---

### `utils/jwt.js` — JWT Utilities

**Why it exists:** Wraps the `jsonwebtoken` library with our app's specific configuration.

**What problem it solves:** Instead of repeating jwt.sign() with the same options everywhere, we have one function that handles it consistently.

**How JWT works:**
```
generateToken({ id, email, name })
           ↓
jwt.sign(payload, SECRET, { expiresIn: '7d' })
           ↓
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7..."
    ↑ header (base64)   ↑ payload (base64)   ↑ signature (HMAC)
```

The signature is created by: `HMAC_SHA256(header + "." + payload, SECRET)`

Only our server knows the SECRET, so only our server can create valid tokens.

**verifyToken():**
```js
jwt.verify(token, SECRET)
// throws if: invalid, tampered, expired
// returns: decoded payload if valid
```

---

### `utils/bcrypt.js` — Password Hashing

**Why it exists:** Centralizes password operations so we're consistent and don't accidentally use the wrong salt rounds.

**How bcrypt works:**
```
hashPassword("mypassword123")
    ↓
bcrypt generates random salt: "$2b$10$N9qo8uLOickgx..."
    ↓
hashes: SALT + "mypassword123" → 60-char hash
    ↓
"$2b$10$N9qo8uLOickgx2uabcdefghijklmnopqrstuvwxyz0123456"
```

The salt is embedded IN the hash. `comparePassword()` extracts it and rehashes to compare.

**Why not MD5/SHA256?**
→ They're fast (~10 billion/second). Bcrypt with 10 rounds: ~100ms/attempt. Makes brute-force attacks ~10 billion times harder.

---

### `middlewares/auth.middleware.js` — JWT Guard

**Why it exists:** Every protected route needs to verify the user is logged in. Without this, anyone could delete anyone's tasks.

**What problem it solves:** Centralizes authentication logic. Without middleware, every single controller would need to repeat the token verification code.

**How it works:**
```
Request → read Authorization header → extract token
       → verifyToken() → decoded.id
       → User.findById(id) → req.user = user
       → next() → controller runs
```

**What happens on failure:**
```
No token → 401 "No token provided"
Bad token → 401 "Invalid token"
Expired   → 401 "Token has expired"
No user   → 401 "User not found"
```

**Why re-fetch user from DB instead of trusting the token?**
Because the user might have been deleted after the token was issued. The token could be valid but the account gone.

---

### `controllers/auth.controller.js` — Auth Logic

**Why it exists:** The business logic of register, login, and getMe. Routes delegate to this.

**What problem it solves:** Keeps routes thin and testable. You can unit-test `register()` without worrying about HTTP routing.

**register() flow:**
1. Validate input
2. Check for existing email (return 409 if exists)
3. Hash password
4. Create user in DB
5. Generate JWT
6. Return user data + token (auto-login)

**login() flow:**
1. Validate email + password present
2. Find user by email
3. Compare password with hash (bcrypt.compare)
4. Generate JWT on success
5. Return user + token

**Security note in login:**
```js
// SAME error message whether email not found OR password wrong
message: 'Invalid email or password'
```
This prevents user enumeration — attackers can't tell whether the email exists.

---

### `controllers/task.controller.js` — Task CRUD

**Why it exists:** All task business logic in one place.

**What problem it solves:** Keeps the route definitions clean. Routes say WHAT URLs handle tasks; this file says HOW.

**Key pattern in every query:**
```js
Task.findOne({ _id: req.params.id, userId: req.user._id })
```

The `userId: req.user._id` clause is critical. Without it, a user could access any task by guessing an ID. This is **Authorization** — the logged-in user can only access THEIR tasks.

**getAllTasks() with filtering:**
```js
const filter = { userId: req.user._id }
if (req.query.priority !== 'all') filter.priority = req.query.priority
if (req.query.search) filter.title = { $regex: query, $options: 'i' }
Task.find(filter).sort(sortOption)
```

MongoDB does the filtering, which is more efficient than fetching all and filtering in JS.

---

### `routes/auth.routes.js` and `routes/task.routes.js`

**Why they exist:** Define which URLs map to which controllers. Separate from controllers so routing logic is isolated.

**Key pattern in task routes:**
```js
router.use(authMiddleware)  // protects ALL routes below this line
```

This is cleaner than `router.get('/', authMiddleware, getAllTasks)` repeated for every route.

**Route ordering gotcha:**
```js
router.patch('/:id/toggle', toggleComplete)  // must come BEFORE /:id
router.route('/:id').get(...).put(...).delete(...)
```

If `/:id` came first, `/toggle` would match it with id="toggle".

---

## FRONTEND FILES

---

### `public/index.html` — Login Page

**Why it exists:** Users must authenticate before accessing tasks.

**Key elements:**
- `<form id="login-form">` — auth.js listens for submit event
- `<p id="error-msg" class="hidden">` — shown on auth failure
- Script at bottom of body — DOM must be built before JS queries it

---

### `public/register.html` — Register Page

**Why it exists:** New users need to create accounts.

**Same auth.js handles it** — the file detects which form is present:
```js
const loginForm = document.getElementById('login-form')      // only on index.html
const registerForm = document.getElementById('register-form') // only on register.html
if (loginForm) { /* attach login handler */ }
if (registerForm) { /* attach register handler */ }
```

---

### `public/dashboard.html` — Main App UI

**Why it exists:** The actual task management interface.

**Key sections:**
- `<header>` — logo, user greeting, logout
- Stats bar — total/active/done/high-priority counts
- Add task form — title, priority, due date, description
- Filter bar — search, status, priority, sort
- Task list — rendered by app.js via JavaScript
- Edit modal — overlay for editing tasks
- Toast container — notification area

**Why JavaScript renders the task list (not server-side HTML)?**
→ Dynamic content. Tasks change on user actions (add/delete/toggle). JavaScript can update just the task list without refreshing the entire page (SPA-like behavior).

---

### `public/style.css` — All Styles

**Why it exists:** Separates styling from structure (HTML) and behavior (JS).

**Key design patterns:**
- **CSS Custom Properties:** `--color-primary: #7c3aed` — change theme in one place
- **Flexbox:** For header, filter bar, task cards
- **CSS Grid:** For stats bar, add-task form (2-column layout)
- **Transitions:** `transition: background-color 0.2s ease` for smooth hover effects
- **Animations:** `@keyframes fadeIn` for new task cards appearing smoothly

---

### `public/auth.js` — Login/Register Logic

**Why it exists:** Handles form submissions for both login and register pages.

**Key concepts:**
- `event.preventDefault()` — stops HTML form's default behavior
- `fetch()` — browser's HTTP client
- `localStorage` — stores JWT token persistently
- `async/await` — handles asynchronous fetch response

**Token flow:**
```
POST /api/auth/login
    → response.json() → { success: true, data: { user, token } }
    → localStorage.setItem('tasky_token', token)
    → redirect to dashboard
```

---

### `public/app.js` — Dashboard Logic

**Why it exists:** All the task CRUD, filtering, and UI update logic.

**Key patterns:**

**1. State management:**
```js
const state = { tasks: [], filter: { search, status, priority, sort } }
// All changes go through state → renderTasks() re-renders
```

**2. API helper:**
```js
async function apiFetch(url, options) {
    headers: { 'Authorization': `Bearer ${token}` }
}
// Centralizes auth header — no repetition across 5+ API calls
```

**3. Event delegation:**
```js
tasksList.addEventListener('click', (event) => {
    const actionEl = event.target.closest('[data-action]')
    // catches toggle/edit/delete clicks on all task cards
})
```

**4. Debounced search:**
```js
let debounceTimer
searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => { renderTasks() }, 300)
})
```

**5. XSS prevention:**
```js
function escapeHTML(str) {
    const div = document.createElement('div')
    div.appendChild(document.createTextNode(str))
    return div.innerHTML  // dangerous chars escaped
}
```
