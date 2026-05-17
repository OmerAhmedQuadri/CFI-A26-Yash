# INTERVIEW CHEATSHEET — Phase-2 (CFI Full-Stack Learning Repository)

> Generated from live codebase analysis. Every concept is grounded in actual files in this repo.

---

## TABLE OF CONTENTS

1. [Project Understanding](#1-project-understanding)
2. [File & Folder Breakdown](#2-file--folder-breakdown)
3. [Backend Interview Prep](#3-backend-interview-prep)
4. [DOM + JavaScript Prep](#4-dom--javascript-prep)
5. [Important Code Walkthrough](#5-important-code-walkthrough)
6. [Build From Scratch Guide](#6-build-from-scratch-guide)
7. [Rapid Revision Section](#7-rapid-revision-section)
8. [Mock Interview](#8-mock-interview)
9. [Resume Help](#9-resume-help)
10. [1 Hour Before Interview](#10-1-hour-before-interview)

---

## 1. PROJECT UNDERSTANDING

### What the project is

This is a **progressive full-stack learning repository** built during CFI (Code For India) training. It evolves from raw JavaScript async concepts all the way to a production-style multi-user REST API with JWT auth, email verification, and role-based admin controls.

### Architecture Evolution (layer by layer)

```
01-setTimeout   →  JS Event Loop, async fundamentals
02-fs           →  File system as "database" (JSON files), MVC in CLI
03              →  bcrypt, dotenv, nodemailer (security utilities)
04-express      →  First Express server, basic routes
05-tasky        →  Express + JSON file DB + Middleware + Controllers
06-library      →  Refactored controller/model pattern
07-calculator   →  REST API server + CLI client using axios
08-tasky-express-mongo → Express + MongoDB (Mongoose), full CRUD REST API
09-multi-user-tasky    → Full auth system: JWT, bcrypt, email verify, RBAC
10-dom          →  Browser-side DOM, localStorage, fetch API
10-movie        →  Movie rating API (average calc, MongoDB arrays)
11-maze         →  Browser game (DOM + keyboard events)
```

### Request Flow (09-multi-user-tasky — the flagship project)

```
Client Request
    ↓
server.js  (Express entry, cors, express.json, route mounting)
    ↓
Router  (user.routes.js / task.routes.js / auth.routes.js / admin.routes.js)
    ↓
Middleware  (registerMiddleware / loginMiddleware / authMiddleware / adminAuthMiddleware)
    ↓
Controller  (registerUser / loginUser / createTask / adminLogin ...)
    ↓
Model  (User.js / Admin.js — Mongoose schemas)
    ↓
MongoDB Atlas
    ↓
Response sent back to client
```

### Backend Flow (detailed)

1. `server.js` boots Express, loads `.env` via `dotenv.config()`, connects DB via side-effect import of `dbConnect.js`, seeds admin via `seeds/admin.seed.js`
2. Every request hits `express.json()` middleware first (parses JSON body)
3. `cors()` middleware allows cross-origin requests
4. Requests are routed to the correct sub-router (`/api/users`, `/api/auth`, `/api/tasks`, `/api/admin`)
5. Each sub-router runs domain middleware (validation, auth check) → then hands off to the controller
6. Controller performs DB operation via Mongoose model → sends JSON response

### API Lifecycle

```
POST /api/users/register
  → registerMiddleware: validate fields, check duplicate email
  → registerUser: hash password, generate email/phone tokens, save to DB, send verification email
  → response: { success, message, data: user }

POST /api/users/login
  → loginMiddleware: check email exists, bcrypt compare password, check email+phone verified
  → loginUser: generate JWT (120s expiry), return token
  → response: { success, message, data: { user, token } }

POST /api/tasks/create  [requires auth-token header]
  → authMiddleware: verify JWT, load user from DB, check active status, check role match
  → createTask: validate body, push task into user.tasks array, save
  → response: { success, message, data: user.tasks }
```

### Authentication Flow

```
Registration:
  1. Validate input (registerMiddleware)
  2. Check duplicate email in DB
  3. Hash password with bcrypt (saltRounds from .env)
  4. Generate random email & phone tokens (Math.random().toString(36).substring(2))
  5. Save user to MongoDB
  6. Send verification email with magic link via Resend API
  7. User clicks link → verifyEmail controller sets user.verified.email = true

Login:
  1. Find user by email
  2. bcrypt.compare(plain, hashed)
  3. Check email AND phone verified
  4. generateJWTToken: jwt.sign({ data: { id, email, role } }, secret, { expiresIn: 120 })
  5. Return JWT to client

Protected Route Access:
  1. Client sends JWT in header: auth-token: <token>
  2. authMiddleware: jwt.verify(token, secret) → decoded
  3. Load user from DB by decoded.data.id
  4. Check user.status == 'active' AND user.role == decoded.data.role
  5. Attach user to req.user → next()
```

### Database Flow

- **JSON file DB** (02-fs, 05-tasky): `fs/promises` read/write JSON files. `readDB()` → `JSON.parse`, `writeDB()` → `JSON.stringify`
- **MongoDB + Mongoose** (08, 09, 10-movie): Schemas define shape, `mongoose.connect(MONGO_URL)` once on startup, models expose `.find()`, `.findById()`, `.create()`, `.save()`, `.findByIdAndUpdate()`, `.findByIdAndDelete()`
- **Embedded documents** (09): Tasks are stored inside `user.tasks` array — no separate Task collection. This is a design choice that avoids JOINs but limits independent task queries.

### Deployment Flow (inferred from codebase)

- No deployment config present; locally runs with `nodemon server.js`
- Env vars loaded from `.env` via dotenv (PORT, MONGO_URL, secret, SALT_ROUNDS, resend_api)
- MongoDB connection string points to Atlas (`MONGO_URL`)
- Admin auto-seeded on server start via `admin.seed.js`

---

## 2. FILE & FOLDER BREAKDOWN

### `01-setTimeout/` — Event Loop Lab

| File | Purpose |
|------|---------|
| `01.js` | Basic setTimeout — shows async non-blocking behaviour |
| `05.js` | Classic `var` + setTimeout closure bug (prints 5,5,5,5,5) |
| `10.js` | setTimeout with 0ms — still async, goes to callback queue |
| `15.js` | setInterval + clearInterval countdown |

**Why it exists**: Understand the event loop before writing any async server code.

---

### `02-fs/` — File System as Database

| File/Folder | Purpose |
|-------------|---------|
| `01.js–06.js` | Sync vs async fs methods |
| `07.js` | Interactive CLI that reads/writes `users.json` with readline-sync |
| `13-tasky/tasky.js` | Single-file CLI task manager: dbInit, readDB, writeDB, CRUD |
| `14-tasky-mvc/` | Same app split into Model / Controller / View (MVC pattern) |
| `14-tasky-mvc/models/Task.js` | Data layer — only `readDB` and `writeDB` live here |
| `14-tasky-mvc/controllers/tasks.controllers.js` | Business logic: createTask, updateTask, deleteTask, printTasks |
| `14-tasky-mvc/views/tasky.js` | UI layer — the while loop menu, user input |
| `14-tasky-mvc/index.js` | Entry point — just calls `tasky()` |
| `14-tasky-mvc/db/tasks.json` | Persistent "database" file |

**Connection**: This MVC split is the same pattern used in Express (models → controllers → routes).

---

### `03/` — Security Utilities

| File | Purpose |
|------|---------|
| `01-bcrypt.js` | `bcrypt.hash` and `bcrypt.compare` basics |
| `02-dotenv.js` | `dotenv.config()` — loads `.env` into `process.env` |
| `03.js` | bcrypt with password from `.env` |
| `.env` | Contains `pass`, `PORT`, `MONGO_URL`, `resend_API` |

**Why it exists**: Learn password hashing and secrets management before building auth.

---

### `04-express/server.js` — First Express Server

- Creates app, single `GET /users/:username` route, listens on 3000
- **Why**: The simplest possible Express app to understand `req`, `res`, `app.listen`

---

### `05-tasky/` — Express + File DB (MVC)

| File | Purpose |
|------|---------|
| `server.js` | Mounts routes with middleware chains |
| `models/models.js` | `readDB` / `writeDB` (fs/promises) |
| `controllers/controllers.js` | CRUD handlers using file DB |
| `middlewares/middleware.js` | `createTaskMiddleware`, `updateTaskMiddleware` — validate before handler |

**How middleware connects**: `app.post('/api/create', createTaskMiddleware, createTask)` — middleware runs first, attaches validated data to `req`, calls `next()`, then controller runs.

---

### `07-calculator/` — REST API + CLI Client

| File | Purpose |
|------|---------|
| `server/server.js` | Express REST API with logging middleware, all math operations as URL params |
| `server/server.log` | Written by `fs.appendFile` on every request — request logging |
| `client/client.js` | CLI client using `axios.get` to call the server |

**Key pattern**: Logging middleware uses `app.use(async (req, res, next) => { await serverLog(req); next() })` — runs on every request.

---

### `08-tasky-express-mongo/server/` — First MongoDB App

| File | Purpose |
|------|---------|
| `server.js` | Express + MongoDB setup, task router mounted |
| `dbConnector.js` | `mongoose.connect(MONGO_URL)` — called as side effect |
| `models/Task.js` | Mongoose schema: task, deadline, priority, completed, timestamps |
| `controllers/task.controller.js` | Full CRUD: create, getAll, getById, getPriority, update, delete |
| `routes/task.routes.js` | Maps HTTP verbs + paths to controllers |

---

### `09-multi-user-tasky/server/` — FLAGSHIP PROJECT

| File/Folder | Purpose |
|-------------|---------|
| `server.js` | Entry point: Express, cors, dotenv, route mounting, 404 handler, port listener |
| `dbConnect.js` | Mongoose connection with try/catch |
| `models/User.js` | User schema: fullname, email, phone, password, role (enum), status (enum), tokens (email/phone), verified (email/phone), tasks[] (embedded) |
| `models/Admin.js` | Admin schema: simpler, role defaults to 'admin', email verified by default |
| `routes/user.routes.js` | POST /register, POST /login |
| `routes/auth.routes.js` | GET /verify/email/:userId/:token, GET /verify/phone/:userId/:token |
| `routes/task.routes.js` | Full task CRUD — all behind `authMiddleware` |
| `routes/admin.routes.js` | Admin login + protected admin routes behind `adminAuthMiddleware` |
| `controllers/user.controllers.js` | registerUser, loginUser |
| `controllers/auth.controllers.js` | verifyEmail, verifyPhone |
| `controllers/task.controllers.js` | createTask, getAllTasks, getTaskById, updatestatus, deleteTask |
| `controllers/admin.controllers.js` | adminLogin, getAllUsers, createUser, assignTask, updateUserStatus |
| `middlewares/user.middlewares.js` | validateUserRegistrationData, registerMiddleware, loginMiddleware |
| `middlewares/auth.middlewares.js` | authMiddleware (user JWT), adminAuthMiddleware (admin JWT) |
| `middlewares/admin.middlewares.js` | adminLoginMiddleware, assignTaskMiddleware |
| `utils/jwt.js` | `generateJWTToken(payload)` — jwt.sign with 120s expiry |
| `utils/bcrypt.js` | `hashPassword`, `comparePassword` — wraps bcrypt |
| `utils/token.js` | `token()` — generates random string for email/phone verification |
| `services/email.service.js` | `sendEmail(userData)` — sends via Resend API |
| `seeds/admin.seed.js` | Auto-creates admin on first server boot if none exists |

---

### `10-dom/` — Frontend Projects

| Folder | What it teaches |
|--------|----------------|
| `01/` | Basic DOM selection, events |
| `02/` | Dynamic element creation |
| `tasky/` | localStorage task manager, create/delete/toggle |
| `09-expense-tracker/` | localStorage CRUD, total calculation, event delegation |
| `06-profile-cards/` | GitHub API fetch, URL query params (`?q=username`) |
| `08-quiz/` | Quiz logic, score tracking |
| `zerodha/` | Landing page clone |

---

### `10-movie/server/` — Movie Rating API

| File | Purpose |
|------|---------|
| `models/Movie.js` | title, description, arr_rating (array of numbers), rating (computed avg) |
| `controllers/movie.controllers.js` | rateMovie: push to arr_rating, compute avg with `.reduce()`, save |

---

## 3. BACKEND INTERVIEW PREP

---

### REST APIs

**In this project**: Every server (07, 08, 09, 10-movie) is a REST API. Routes follow `/api/resource/action` pattern.

**Core rules of REST**:
- Stateless — server stores no client state between requests (JWT handles this)
- Uniform interface — consistent URL design
- HTTP verbs carry meaning: GET=read, POST=create, PUT=update, DELETE=delete

**Interview Q**: What makes an API RESTful?
**Answer**: Statelessness, client-server separation, uniform interface (resource URLs + HTTP verbs), and optionally: layered system, cacheability. In this project, each request in `09-multi-user-tasky` is stateless — the JWT in the header is the entire session.

---

### CRUD

**In this project** (from `08-tasky-express-mongo/server/controllers/task.controller.js`):

| Operation | HTTP | Route | Mongoose |
|-----------|------|-------|---------|
| Create | POST | `/api/tasks/create` | `new Task({...}).save()` |
| Read All | GET | `/api/tasks/` | `Task.find()` |
| Read One | GET | `/api/tasks/:id` | `Task.findById(id)` |
| Update | PUT | `/api/tasks/update` | `Task.findByIdAndUpdate(id, data, { new: true })` |
| Delete | DELETE | `/api/tasks/delete/:id` | `Task.findByIdAndDelete(id)` |

**Common mistake**: Forgetting `{ new: true }` in `findByIdAndUpdate` — without it, the old document is returned.

---

### Middleware

**In this project**: `05-tasky/middlewares/middleware.js`, `09-multi-user-tasky/server/middlewares/`

**What it is**: A function with signature `(req, res, next)` that runs before the route handler.

**How it works in 09**:
```
POST /api/users/register
  registerMiddleware → validates fields, checks duplicate email, attaches req.userData → next()
  registerUser (controller) → uses req.userData, hashes password, saves to DB
```

**Types in this project**:
- **Validation middleware**: `registerMiddleware`, `loginMiddleware` — check input before DB hits
- **Auth middleware**: `authMiddleware` — verify JWT, load user, check active status
- **Logging middleware**: `07-calculator` — `app.use(async (req, res, next) => { await serverLog(req); next() })`
- **Error fallback**: `app.use((req, res) => { res.send({ message: 'Route not found' }) })` — 4-arg or no-match handler

**Interview Q**: What is middleware in Express?
**Answer**: A function that intercepts the request-response cycle. It has access to `req`, `res`, and `next()`. Calling `next()` passes control to the next function. In this project, `authMiddleware` extracts the JWT from `req.headers['auth-token']`, verifies it, loads the user from MongoDB, attaches it to `req.user`, and then calls `next()` so the route handler can access `req.user` directly.

**Common mistake**: Forgetting to call `next()` — the request hangs forever.

---

### Authentication

**In this project** (`09-multi-user-tasky`):

- Password hashing: bcrypt with salt rounds from `.env`
- JWT generation on login: `jwt.sign({ data: payload }, secret, { expiresIn: 120 })`
- JWT verification on protected routes: `jwt.verify(token, secret)` in `authMiddleware`
- Email verification: random token stored in `user.tokens.email`, sent in magic link, route `GET /api/auth/verify/email/:userId/:token` sets `user.verified.email = true`

**Two layers of auth**:
1. `loginMiddleware` — validates credentials at login time
2. `authMiddleware` — validates JWT on every protected request

---

### JWT (JSON Web Tokens)

**In this project**: `09-multi-user-tasky/server/utils/jwt.js`

**Structure**: `header.payload.signature`
- Header: algorithm (HS256), type
- Payload: `{ data: { id, email, role }, iat, exp }`
- Signature: HMAC of header+payload using `process.env.secret`

**Flow in this project**:
```js
// Generation (utils/jwt.js)
jwt.sign({ data: { id, email, role } }, process.env.secret, { expiresIn: 120 })

// Verification (auth.middlewares.js)
const decoded = jwt.verify(jwtToken, process.env.secret)
const userId = decoded.data.id
```

**Interview Q**: What's the difference between JWT and sessions?
**Answer**:
- **Sessions**: Server stores session data; client only has a session ID cookie. Stateful — requires server memory or a session store (Redis).
- **JWT**: Server stores nothing. The token itself contains all user info, signed with a secret. Stateless — scales better horizontally. This project uses JWT.

**Common mistake**: Storing sensitive data (credit card, etc.) in JWT payload — it's Base64 encoded, not encrypted. Anyone can decode it.

---

### Sessions vs Cookies

**In this project**: JWT is used instead of sessions. Token sent in custom header `auth-token`, not a cookie.

| | Sessions | JWT (this project) |
|--|---------|---------------------|
| Storage | Server-side | Client-side (token) |
| Scalability | Needs shared store for multiple servers | Stateless, scales freely |
| Revocation | Easy (delete session) | Hard (must wait for expiry or use blacklist) |
| Size | Small cookie (just ID) | Larger token (contains payload) |

---

### Authorization (RBAC)

**In this project** — two roles: `user` and `admin`

- User schema has `role: { enum: ['user', 'admin'], default: 'user' }`
- On login, role is embedded in JWT payload: `{ id, email, role: 'user' }`
- `authMiddleware` verifies `user.role == decoded.data.role` — prevents role escalation attacks
- Admin routes use `adminAuthMiddleware` which loads from `Admin` model, not `User`
- Admin can: `getAllUsers`, `createUser`, `assignTask`, `updateUserStatus`
- Users can only manage their own tasks

**Interview Q**: How does your project prevent a user from accessing admin routes?
**Answer**: There are two separate middlewares. `authMiddleware` only looks up the `User` collection. `adminAuthMiddleware` looks up the `Admin` collection. Even if a user passes a valid JWT, looking them up in the `Admin` collection will return null and deny access. Additionally, the role in the DB is compared to the role in the JWT payload to prevent tampering.

---

### Validation

**In this project**: `09-multi-user-tasky/server/middlewares/user.middlewares.js`

```js
export const validateUserRegistrationData = (userData) => {
    const errors = []
    if (!userData.email) errors.push({ field: 'email', message: '...' })
    if (!userData.password || userData.password.length < 3) errors.push(...)
    if (!userData.role || !["user", "admin"].includes(userData.role)) errors.push(...)
    return errors
}
```

**Two types of validation**:
1. **Field validation** — are required fields present and valid format?
2. **Business validation** — does email already exist in DB? (registerMiddleware)

**Mongoose-level validation**: Schema enforces `required`, `enum`, `unique` at DB layer too (double safety net).

---

### Async/Await

**In this project**: Every controller and middleware uses `async/await` with `try/catch`.

**Why async**: Node.js is single-threaded. DB calls (Mongoose), file reads (`fs/promises`), bcrypt hashing are all I/O operations. Using `await` lets Node.js handle other requests while waiting — non-blocking.

**Pattern used in every controller**:
```js
export const createTask = async (req, res) => {
    try {
        // async DB operation
        const user = await User.findById(userId)
        await user.save()
        res.send({ success: true, data: user.tasks })
    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal server error', error })
    }
}
```

**Interview Q**: Why use async/await instead of callbacks?
**Answer**: Callbacks lead to "callback hell" — deeply nested, hard to read. Async/await makes async code read like synchronous code. Error handling is cleaner with `try/catch` versus nested `if(err)`. Compare `02-fs/01.js` (callback-based `fs.readFile`) to `02-fs/14-tasky-mvc/models/Task.js` (promise-based `fs/promises` with async/await).

---

### Event Loop

**In this project**: `01-setTimeout/` demonstrates this directly.

**How it works**:
1. **Call Stack** — synchronous code executes here
2. **Web APIs** — setTimeout, I/O handed off here
3. **Callback Queue** — callbacks wait here after Web APIs finish
4. **Event Loop** — moves callbacks from queue to call stack when stack is empty

**Classic example from `01-setTimeout/05.js`**:
```js
for (var i = 0; i < 5; i++) {
    setTimeout(() => { console.log(i) }, 3000)
}
// Prints: 5 5 5 5 5 (not 0 1 2 3 4)
```
**Why**: `var` is function-scoped; by the time callbacks run, loop has finished and `i = 5`. Fix: use `let` (block-scoped) or IIFE.

**From `01-setTimeout/10.js`**: Even `setTimeout(fn, 0)` is async — synchronous code always runs first.

---

### Error Handling

**In this project**: Consistent pattern across all controllers:
```js
try {
    // happy path
} catch (error) {
    console.log(error)
    res.status(500).send({
        success: false,
        message: 'Internal server error',
        error: error
    })
}
```

**Fallback 404 handler** in `server.js`:
```js
server.use((req, res) => {
    return res.send({ success: false, message: 'Route not found' })
})
```
**Why it must be last**: Express matches routes top-to-bottom; the fallback only runs if nothing above matched.

**Interview Q**: How does Express handle errors?
**Answer**: Express has a 4-argument error handler `(err, req, res, next)` for unhandled errors. For handled errors, this project uses `try/catch` in every async function and returns consistent `{ success: false, message, error }` responses. The 404 handler at the bottom of `server.js` catches any unmatched route.

---

### Database Concepts

**In this project — two approaches**:

**JSON file DB** (02-fs, 05-tasky):
- File = database, array = table, object = row
- `readDB()` loads file into memory, mutate, `writeDB()` saves back
- Problem: Not concurrent-safe, no indexes, no query language

**MongoDB + Mongoose** (08, 09, 10-movie):
- Document database: stores JSON-like BSON documents
- Collections = tables, Documents = rows
- Schema defined via Mongoose: `new mongoose.Schema({ field: { type, required, unique } })`
- `mongoose.model('User', userSchema)` creates a model bound to `users` collection

---

### ORM/ODM

**ODM in this project**: Mongoose (Object Document Mapper for MongoDB)

**What Mongoose gives you**:
- Schema validation before saving
- Type casting
- Query helpers: `.find()`, `.findById()`, `.findOne()`, `.findByIdAndUpdate()`, `.findByIdAndDelete()`
- Virtuals and hooks (not used here but available)
- `.save()` method — partial update by modifying document properties

**Embedded vs Referenced documents** (design choice in `09`):
- Tasks are embedded inside `User` document: `user.tasks` array
- Pro: single DB query to get user + all tasks
- Con: can't query tasks independently, user document grows large

---

### Indexing

**In this project**: `unique: true` in Mongoose schema creates a MongoDB unique index automatically.
```js
// User.js
email: { type: String, required: true, unique: true }
// Admin.js
email: { type: String, required: true, unique: true }
// Task.js (08)
task: { type: String, required: true, unique: true }
```

**Why indexes matter**: Without an index, `User.findOne({ email })` scans every document. With a unique index on email, MongoDB can find the document in O(log n). At scale, this is the difference between milliseconds and seconds.

---

### Security

**In this project**:
- **Password hashing**: bcrypt with configurable salt rounds (`process.env.SALT_ROUNDS`) — protects against DB breach
- **JWT secret in .env**: Never hardcoded in source
- **Role verification**: `user.role == decoded.data.role` — prevents JWT role tampering
- **Status check**: `user.status != 'active'` blocks banned/disabled users even with valid JWT
- **Email verification** before login: Users can't log in until email is verified
- **Input validation**: All fields validated before DB operations

**Vulnerabilities to know**:
- `08-tasky-express-mongo` checks `id.length != 24` for MongoDB ObjectId validation — good practice
- `09` doesn't sanitize HTML in email template (potential XSS in sent emails, not critical)
- JWT expiry is 120 seconds — very short, good for security, bad for UX

---

### Environment Variables

**In this project**: `09-multi-user-tasky/server/.env`
```
PORT = 3000
MONGO_URL = <mongodb connection string>
resend_API = re_xxx
secret = <jwt secret>
SALT_ROUNDS = 12
```

**Why .env**: Secrets must never be in source code. `dotenv.config()` loads `.env` into `process.env`. `.env` should be in `.gitignore`.

**Pattern**: Every file that needs env vars calls `dotenv.config()` at the top, then accesses `process.env.VAR_NAME`.

---

### API Optimization

**In this project** (10-movie):
```js
Movie.find().select("title description rating")
```
`.select()` returns only specified fields — reduces payload size, improves performance.

**Other techniques** (to know for interviews):
- Pagination: `Task.find().skip(n).limit(10)`
- Indexing on frequently queried fields
- Caching with Redis (not in this project but mentionable)
- Compression middleware (`compression` package)

---

### Rate Limiting (concept — not implemented, but know it)

**What it is**: Limits how many requests a client can make in a time window.
**Package**: `express-rate-limit`
```js
const limiter = rateLimit({ windowMs: 15*60*1000, max: 100 })
app.use('/api/', limiter)
```
**Why important**: Prevents brute-force attacks on `/api/users/login`.

---

### Caching (concept — not implemented)

**Types**:
- **In-memory** (Node.js Map/object): Fastest, lost on restart
- **Redis**: Persistent, shared across instances
- **HTTP cache headers**: `Cache-Control`, `ETag`

**When to use**: Cache `Movie.find()` results since movies don't change often.

---

### File Uploads (concept — not in project)

**Package**: `multer`
```js
const upload = multer({ dest: 'uploads/' })
app.post('/upload', upload.single('file'), (req, res) => { req.file })
```

---

### Services Layer

**In this project**: `09-multi-user-tasky/server/services/email.service.js`

```js
export async function sendEmail(userData) {
    const resend = new Resend(process.env.resend_api)
    await resend.emails.send({ from, to, subject, html })
}
```

**Why a service**: Keeps the controller clean. Controller calls `sendEmail(data)`, doesn't know about Resend SDK. If you switch from Resend to SendGrid, only change `email.service.js`.

**SMS integration**: `09-multi-user-tasky/client/test.js` uses Twilio to send SMS verification messages.

---

## 4. DOM + JAVASCRIPT PREP

---

### DOM

**In this project**: `10-dom/tasky/script.js`, `10-dom/09-expense-tracker/script.js`

**What it is**: Document Object Model — browser's in-memory tree representation of HTML. JavaScript can read and modify it.

**Selection**:
```js
// From expense-tracker/script.js
const EXPENSE = document.getElementById('expense')
const TOTAL = document.getElementById('total')
```

**Creation** (from `tasky/script.js`):
```js
const li = document.createElement('li')
const deleteBtn = document.createElement('button')
li.append(task, deleteBtn)
taskListDisplay.append(li)
```

**Interview Q**: What is the DOM?
**Answer**: The DOM is a programming interface for HTML documents. When the browser loads HTML, it creates a tree of node objects. JavaScript can traverse and modify this tree using APIs like `document.getElementById`, `createElement`, `appendChild`, `innerHTML`. In the Tasky project, new task `<li>` elements are created entirely in JavaScript and appended to the task list — the HTML file has just a container `<ul>`, the content is generated dynamically.

---

### Event Bubbling / Capturing

**In this project**: `10-dom/tasky/script.js` uses event bubbling implicitly.

- **Bubbling**: Event fires on target, then propagates UP to parent elements (default)
- **Capturing**: Event fires from root DOWN to target

```js
// deleteBtn is inside li. Click on deleteBtn triggers:
// deleteBtn click → li click (bubbling)
// To stop bubbling:
event.stopPropagation()
```

**In tasky**: Click on the entire `<li>` toggles completed. Click on delete button inside the `<li>` should only delete — `li.remove()` is called but `li`'s click handler would also fire without `stopPropagation`.

---

### Event Delegation

**What it is**: Attach one event listener on a parent instead of many listeners on children.

**Example from expense-tracker**:
```js
// Instead of adding listener to each delete button:
deleteBtn.addEventListener('click', function () {
    li.remove()
    Expenses = Expenses.filter(Exp => exp.id != Exp.id)
    renderExpenses()
    saveExpenses()
})
```

**Better pattern** (delegation):
```js
EXPENSE_DISPLAY.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete-btn')) {
        // handle delete
    }
})
```

**Why it matters**: When list items are dynamic (added/removed), listeners attached to parent survive DOM changes.

---

### localStorage / sessionStorage

**In this project**: `10-dom/tasky/script.js`, `10-dom/09-expense-tracker/script.js`

```js
// Save
localStorage.setItem('tasks', JSON.stringify(tasks))

// Load
let tasks = JSON.parse(localStorage.getItem('tasks')) || []
```

| | localStorage | sessionStorage |
|--|-------------|----------------|
| Persistence | Until manually cleared | Until tab closes |
| Scope | Domain-wide | Per tab |
| Size | ~5MB | ~5MB |

**Pattern**: Always `JSON.stringify` before saving (localStorage only stores strings), `JSON.parse` when reading. Always use `|| []` fallback in case key doesn't exist yet.

---

### API Calls (fetch)

**In this project**: `10-dom/06-profile-cards/users/script.js` fetches from GitHub API.

```js
// Pattern: fetch GitHub user
const username = new URLSearchParams(window.location.search).get('q')
const response = await fetch(`https://api.github.com/users/${username}`)
const data = await response.json()
```

**Interview Q**: How do you make an API call in vanilla JS?
**Answer**:
```js
const res = await fetch('https://api.example.com/data')
const json = await res.json()
```
`fetch` returns a Promise of a Response. `.json()` also returns a Promise. You need to `await` both.

**Axios (used in `07-calculator/client/client.js`)**:
```js
const response = await axios.get(API_URL)
// response.data is already parsed JSON — no .json() needed
```

---

### Closures

**In this project**: `01-setTimeout/05.js` is the classic closure demo.

**What it is**: A function that "remembers" variables from its outer scope even after the outer function has returned.

```js
// Classic var bug (01-setTimeout/05.js)
for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 3000)  // prints 5,5,5,5,5
}
// Fix with let (block scope creates new binding each iteration)
for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 3000)  // prints 0,1,2,3,4
}
```

**In DOM code**: Every `deleteBtn.addEventListener('click', function() { ... exp.id ... })` is a closure — the callback "closes over" `exp` from the `forEach` iteration.

---

### Promises

**What it is**: An object representing an eventual value. States: pending → fulfilled | rejected.

```js
const p = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done'), 1000)
})
p.then(val => console.log(val))
 .catch(err => console.log(err))
```

**`async/await` is syntactic sugar over Promises**. Every `async` function returns a Promise. `await` pauses execution until the Promise resolves.

---

### Hoisting

**What it is**: Variable and function declarations are moved to the top of their scope during compilation.

```js
console.log(x)  // undefined (not ReferenceError)
var x = 5

// vs let:
console.log(y)  // ReferenceError: Cannot access 'y' before initialization
let y = 5
```

**Functions are fully hoisted** (the body too):
```js
greet()  // works
function greet() { console.log('hi') }
```

**Arrow functions and const/let are NOT hoisted** in the same way.

---

### Scope

- **Global**: Available everywhere
- **Function**: Variables declared with `var` inside a function
- **Block**: Variables declared with `let`/`const` inside `{}`

**In this project**: `var` in `05.js` causes the loop bug because `var` is function-scoped, not block-scoped.

---

### Execution Context

**What it is**: The environment in which JavaScript code runs.

1. **Global Execution Context**: Created first, `this = window` (browser) or `module.exports` (Node)
2. **Function Execution Context**: Created for every function call
3. **Creation phase**: Hoisting happens, `this` bound
4. **Execution phase**: Code runs line by line

---

### `this` Keyword

**In this project**: `10-dom/tasky/script.js`
```js
li.addEventListener('click', function () {
    this.classList.toggle('completed')  // 'this' = the li element
})
// Arrow function would NOT work here — 'this' would be outer scope
```

| Context | `this` value |
|---------|-------------|
| Global | `window` / `global` |
| Function (strict mode) | `undefined` |
| Method | The object |
| Arrow function | Lexical outer scope |
| Event listener (regular fn) | The DOM element |

---

### Prototypes

**What it is**: Every JS object has a `__proto__` pointing to its prototype. Property lookup walks the chain.

```js
// Array methods like .forEach, .find, .filter come from Array.prototype
tasks.forEach(...)  // tasks.__proto__ === Array.prototype
```

In this project, `.find()`, `.findIndex()`, `.filter()`, `.push()`, `.splice()` are all Array prototype methods used extensively.

---

## 5. IMPORTANT CODE WALKTHROUGH

---

### Admin Seed (`seeds/admin.seed.js`)

```js
const seedAdmin = async () => {
    const existingAdmin = await Admin.findOne()  // check if any admin exists
    if(existingAdmin) return  // idempotent — won't duplicate
    const adminData = { fullname: 'Admin', email: 'admin@tasky.com', ... }
    adminData.password = await hashPassword(adminData.password)  // hash before save
    await Admin.create(adminData)
}
await seedAdmin()  // top-level await — runs on module import
```

**Why important**: Called as `import './seeds/admin.seed.js'` in `server.js` — runs once on startup. Idempotent (safe to run multiple times). Uses top-level `await` (requires `"type": "module"` in package.json).

---

### Middleware Chain (Registration Flow)

```
POST /api/users/register
→ express.json()          // parse body
→ registerMiddleware      // validate fields, check duplicate email, set req.userData  
→ registerUser            // hash password, generate tokens, save, send email
```

`registerMiddleware` sets `req.user = userData` (note: in the actual code it sets `req.userData`, but controller reads `req.user`). The middleware builds the `req.user` object and passes it to the controller via `next()`. **Key insight**: Middleware is where validation belongs; controllers are for business logic only.

---

### JWT Generation + Verification

```js
// utils/jwt.js — Generation
export const generateJWTToken = async (payload) => {
    const jwtToken = jwt.sign({ data: payload }, process.env.secret, { expiresIn: 120 })
    return jwtToken
}

// auth.middlewares.js — Verification
const jwtToken = req.headers['auth-token']
const decoded = jwt.verify(jwtToken, process.env.secret)
const userId = decoded.data.id
const user = await User.findById(userId)
if(!user || user.status != 'active') return res.send({ success: false, message: 'Inactive' })
if(user.role != decoded.data.role) return res.send({ success: false, message: 'Auth failure' })
req.user = user
next()
```

**Why role check matters**: Prevents JWT payload tampering where a user modifies their JWT to claim admin role (impossible to forge signature, but worth double-checking DB role).

---

### Task Status Update (`task.controllers.js:updatestatus`)

```js
export const updatestatus = async (req, res) => {
    const taskId = req.params.taskId
    const status = parseInt(req.params.status)  // 0 or 1
    if(!(status == 0 || status == 1)) return error

    const taskIndex = user.tasks.findIndex((task) => task._id == taskId)
    if(taskIndex == -1) return not found

    user.tasks[taskIndex].isComplete = !!status  // 1 → true, 0 → false
    await user.save()
    res.send({ success: true, data: user.tasks[taskIndex] })
}
```

**Key trick**: `!!status` converts integer 0/1 to boolean false/true. The route is `PUT /updatestatus/:status/:taskId`.

---

### Movie Rating Average (`movie.controllers.js:rateMovie`)

```js
existingMovie.arr_rating.push(rate)
const avg = existingMovie.arr_rating.reduce((acc, cur) => acc + cur, 0) / existingMovie.arr_rating.length
existingMovie.rating = avg
await existingMovie.save()
```

**Why store the array**: Allows recalculating average later; you can also compute median, mode, etc. The `arr_rating` field is `[Number]` type in Mongoose — an array of numbers.

---

### DB Initialization (`02-fs/13-tasky/tasky.js:dbInit`)

```js
async function dbInit() {
    try {
        await fs.access(db)          // check file exists
        const tasks = await readDB()
        if(!Array.isArray(tasks)) {  // file exists but corrupt
            await writeDB([])
        }
    } catch (error) {               // file doesn't exist
        await writeDB([])            // create empty array file
        await dbInit()               // recurse once to verify
    }
}
```

**Why this pattern**: Defensive initialization — handles both "file missing" and "file corrupt" cases. Recursive call after creation ensures the file is now valid.

---

### bcrypt Utility (`utils/bcrypt.js`)

```js
const saltRounds = Number(process.env.SALT_ROUNDS)

export const hashPassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    return hashedPassword
}

export const comparePassword = async (password, hashedPassword) => {
    const match = await bcrypt.compare(password, hashedPassword)
    return match
}
```

**Why salt rounds in .env**: Higher rounds = more secure but slower. Production uses 12, development can use 10. `Number()` cast is critical — env vars are always strings.

---

### Request Logger (`07-calculator/server/server.js`)

```js
async function serverLog(req) {
    const logData = `\n${new Date().toLocaleString()} || ${req.method} ${req.url} ${req.socket.remoteAddress}`
    await fs.appendFile('./server.log', logData)
}
app.use(async (req, res, next) => {
    await serverLog(req)
    next()
})
```

**Pattern**: Global middleware that runs on every request. Uses `fs.appendFile` (non-destructive — appends, doesn't overwrite). Logs timestamp, HTTP method, URL, and client IP.

---

## 6. BUILD FROM SCRATCH GUIDE

### Step 1: Backend Setup (Node.js + Express)

```bash
mkdir my-project && cd my-project
npm init -y
npm install express dotenv mongoose bcrypt jsonwebtoken cors resend
npm install -D nodemon
```

Edit `package.json`:
```json
{
  "type": "module",
  "scripts": { "start": "nodemon server.js" }
}
```

### Step 2: Folder Structure (MVC pattern from 09)

```
server/
  server.js
  dbConnect.js
  models/
    User.js
    Admin.js
  routes/
    user.routes.js
    auth.routes.js
    task.routes.js
    admin.routes.js
  controllers/
    user.controllers.js
    auth.controllers.js
    task.controllers.js
    admin.controllers.js
  middlewares/
    user.middlewares.js
    auth.middlewares.js
    admin.middlewares.js
  utils/
    jwt.js
    bcrypt.js
    token.js
  services/
    email.service.js
  seeds/
    admin.seed.js
  .env
```

### Step 3: Environment Setup

Create `.env`:
```
PORT=3000
MONGO_URL=mongodb+srv://user:pass@cluster.mongodb.net/dbname
secret=your_jwt_secret_here
SALT_ROUNDS=12
resend_api=re_xxxxx
```

### Step 4: Database Connection (`dbConnect.js`)

```js
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DB connected ✅')
    } catch (error) {
        console.log('DB connection failed ❌', error)
    }
}
dbConnect()
export default dbConnect
```

### Step 5: Entry Point (`server.js`)

```js
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import './dbConnect.js'
import './seeds/admin.seed.js'
import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.routes.js'
import taskRouter from './routes/task.routes.js'
import adminRouter from './routes/admin.routes.js'

dotenv.config()
const server = express()
server.use(cors())
server.use(express.json())

server.use('/api/users', userRouter)
server.use('/api/auth', authRouter)
server.use('/api/tasks', taskRouter)
server.use('/api/admin', adminRouter)

server.use((req, res) => res.send({ success: false, message: 'Route not found' }))
server.listen(process.env.PORT, () => console.log('Server @' + process.env.PORT))
```

### Step 6: Running Locally

```bash
cd server
npm install
npm start   # runs: nodemon server.js
```

Server auto-restarts on file changes (nodemon). Access at `http://localhost:3000`.

### Step 7: Test with REST Client

Use Thunder Client (VS Code) or Postman:
- POST `http://localhost:3000/api/users/register` with JSON body
- POST `http://localhost:3000/api/users/login` → get JWT
- GET `http://localhost:3000/api/tasks/getAll` with header `auth-token: <JWT>`

### Step 8: Deployment Overview (conceptual)

1. Push code to GitHub (never commit `.env`)
2. Create MongoDB Atlas cluster, whitelist `0.0.0.0/0`
3. Deploy to Railway/Render/Heroku:
   - Set environment variables in dashboard
   - Set start command: `node server.js`
4. Update `MONGO_URL` to Atlas connection string

---

## 7. RAPID REVISION SECTION

### One-Line Summaries

- **Express**: Web framework for Node.js — handles HTTP routing
- **Mongoose**: ODM for MongoDB — schema + query helpers
- **JWT**: Signed token for stateless auth — `sign()` on login, `verify()` on each request
- **bcrypt**: One-way password hashing — `hash()` on register, `compare()` on login
- **dotenv**: Loads `.env` file into `process.env`
- **cors**: Allows cross-origin requests (needed when frontend and backend are on different domains)
- **Middleware**: Function that runs between request and response — validates, authenticates, logs
- **Embedded documents**: Nested objects/arrays within a MongoDB document (tasks inside user)
- **MVC**: Model (data), View (UI/response), Controller (logic) — separation of concerns
- **Event loop**: Mechanism that lets Node.js handle async I/O non-blockingly on a single thread

---

### Important Commands

```bash
# Init project
npm init -y

# Install dependencies
npm install express mongoose dotenv bcrypt jsonwebtoken cors

# Dev dependency
npm install -D nodemon

# Run with nodemon
npx nodemon server.js
# or (if script set): npm start

# MongoDB Atlas connection
mongodb+srv://username:password@cluster.mongodb.net/dbname

# Check Node version
node --version

# Check npm version
npm --version
```

---

### Important Syntax

```js
// Express
const app = express()
app.use(express.json())
app.get('/path', handler)
app.post('/path', middleware, handler)
app.listen(PORT, callback)

// Mongoose
const schema = new mongoose.Schema({ field: { type, required, default, enum } })
const Model = mongoose.model('Name', schema)
await Model.find()
await Model.findById(id)
await Model.findOne({ email })
await Model.create(data)
await doc.save()
await Model.findByIdAndUpdate(id, update, { new: true, runValidators: true })
await Model.findByIdAndDelete(id)

// JWT
jwt.sign({ data: payload }, secret, { expiresIn: '1d' })
jwt.verify(token, secret)

// bcrypt
await bcrypt.hash(password, saltRounds)
await bcrypt.compare(plain, hashed)

// dotenv
import dotenv from 'dotenv'
dotenv.config()
process.env.MY_VAR

// ES Modules
import x from './file.js'      // default import
import { x } from './file.js'  // named import
export default x               // default export
export const x = ...           // named export
```

---

### HTTP Status Codes

| Code | Meaning | When to use |
|------|---------|-------------|
| 200 | OK | Successful GET, PUT |
| 201 | Created | Successful POST (resource created) |
| 400 | Bad Request | Invalid input, validation failed |
| 401 | Unauthorized | Not authenticated (no/invalid token) |
| 403 | Forbidden | Authenticated but not authorized |
| 404 | Not Found | Resource doesn't exist |
| 409 | Conflict | Duplicate resource (email already exists) |
| 500 | Internal Server Error | Unhandled server error |

**In this project**: 400 for invalid data, 500 for catch blocks, 200 for most success (some inconsistency — a common real-world trait).

---

### Debugging Tips

```bash
# Check if server is running
curl http://localhost:3000/

# Check specific route
curl -X POST http://localhost:3000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"pass123"}'

# MongoDB connection issue
# → Check MONGO_URL in .env
# → Check Atlas IP whitelist (0.0.0.0/0 for dev)
# → Check mongoose version compatibility

# JWT issues
# → Verify secret in .env matches between sign and verify
# → Check header name (this project uses 'auth-token', not 'Authorization')
# → Token expired (120 second expiry in this project)

# bcrypt issues
# → SALT_ROUNDS must be Number(process.env.SALT_ROUNDS) — env vars are strings

# nodemon not restarting
# → Save the file again
# → Check for syntax errors (crashed process won't restart)
```

---

### Common Backend Issues

| Issue | Cause | Fix |
|-------|-------|-----|
| `Cannot read properties of null` | `findById` returned null, not checked | Add `if(!user) return error` |
| `MongoServerError: E11000 duplicate key` | Unique index violation | Check existence before create |
| `jwt malformed` | Token sent without 'Bearer' or wrong header | Check header name and token format |
| `JsonWebTokenError: invalid signature` | Different secret used to sign vs verify | Ensure same `process.env.secret` |
| `ReferenceError: process is not defined` | Running browser code in Node | Check runtime |
| Body is `undefined` | Forgot `app.use(express.json())` | Add JSON middleware |
| 404 on valid routes | Route order issue or wrong base path | Check `server.use('/api/users', userRouter)` prefix |
| `CORS error` in browser | CORS not enabled | Add `app.use(cors())` |

---

### Commonly Forgotten Concepts

- `express.json()` MUST be before route handlers or `req.body` is `undefined`
- `{ new: true }` in `findByIdAndUpdate` or you get the old document
- `{ runValidators: true }` to enforce schema on update
- `await` on both `fetch()` AND `.json()`
- `.env` must be in `.gitignore`
- `dotenv.config()` must be called before accessing `process.env`
- ES Module imports need `.js` extension: `import x from './file.js'`
- `"type": "module"` in `package.json` for ES Module support
- `Number()` cast for numeric env vars — they come as strings
- `null` check after every `findById` / `findOne`

---

## 8. MOCK INTERVIEW

---

### Beginner Questions

**Q1: What is Express.js and why is it used?**

> **Answer**: Express is a minimal web framework for Node.js that simplifies creating HTTP servers and REST APIs. Without Express, you'd use Node's raw `http` module and manually parse URLs, methods, and bodies. Express provides `app.get()`, `app.post()`, middleware, and routing out of the box. In this project, `server.js` uses Express to handle `/api/users`, `/api/tasks`, etc.

---

**Q2: What is the difference between `req.params`, `req.body`, and `req.query`?**

> **Answer**:
> - `req.params`: URL path parameters — `/api/tasks/:taskId` → `req.params.taskId`
> - `req.body`: Data sent in the request body (POST/PUT) — requires `express.json()` middleware
> - `req.query`: URL query string — `/search?q=node` → `req.query.q`
>
> In this project, `deleteTask` uses `req.params.taskId`, `createTask` uses `req.body.taskname`, and `06-profile-cards` reads `?q=username` from `window.location.search`.

---

**Q3: What is MongoDB and how is it different from SQL?**

> **Answer**: MongoDB is a NoSQL document database that stores data as JSON-like BSON documents. Unlike SQL which has fixed schemas and tables, MongoDB has flexible schemas and collections. In this project, the User document contains an embedded `tasks` array — in SQL you'd need a separate `tasks` table with a foreign key. MongoDB is great for hierarchical/nested data.

---

**Q4: What is bcrypt and why use it for passwords?**

> **Answer**: bcrypt is a password-hashing algorithm. You never store plain passwords — if the DB is breached, hashed passwords can't be reversed. `bcrypt.hash(password, saltRounds)` adds a random salt and hashes. `bcrypt.compare(plain, hash)` compares without revealing the original. Salt rounds make brute-force attacks slower. In this project, `utils/bcrypt.js` wraps these two operations.

---

**Q5: What does `async/await` do?**

> **Answer**: It makes asynchronous code read like synchronous code. `async` marks a function as returning a Promise. `await` pauses execution inside that function until the awaited Promise resolves. Without it, you'd chain `.then()` callbacks. In every controller in this project, `await User.findById(id)` pauses until MongoDB returns the document.

---

### Intermediate Questions

**Q6: Walk me through your authentication flow.**

> **Answer**: A user registers by POSTing to `/api/users/register`. The `registerMiddleware` validates input and checks for duplicates. The `registerUser` controller hashes the password with bcrypt, generates random tokens for email/phone verification, saves the user to MongoDB, and sends a verification email via Resend API. The user clicks the magic link which hits `GET /api/auth/verify/email/:userId/:token`, and the `verifyEmail` controller marks `user.verified.email = true`. On login, `loginMiddleware` checks credentials and verifies both email and phone are verified, then `loginUser` generates a JWT signed with `process.env.secret` with a 120-second expiry. For protected routes, the client sends the JWT in the `auth-token` header, `authMiddleware` verifies and decodes it, loads the user from DB, and attaches them to `req.user`.

---

**Q7: What is middleware and how does it work in Express?**

> **Answer**: Middleware is a function with `(req, res, next)` signature that runs between the incoming request and the final route handler. It can read/modify `req` and `res`, perform validation, and either call `next()` to continue the chain or send a response to short-circuit. In this project, the route `router.post('/register', registerMiddleware, registerUser)` runs `registerMiddleware` first — it validates the request body, checks for duplicate emails, and attaches `req.userData` before calling `next()` to hand off to `registerUser`. If validation fails, it calls `res.send()` and `next()` is never called.

---

**Q8: What is the difference between `.find()` and `.findOne()` in Mongoose?**

> **Answer**: `.find()` returns an array of all matching documents. `.findOne()` returns the first matching document object (or null). In this project, `loginMiddleware` uses `User.findOne({ email })` because email is unique — there's at most one match. `getAllUsers` uses `User.find()` to return all users.

---

**Q9: How do embedded documents work in MongoDB? What are the tradeoffs?**

> **Answer**: In MongoDB, you can nest documents inside other documents. In this project, tasks are stored directly in the User document as `user.tasks[]`. This means getting a user's tasks requires only one DB query. The tradeoff: the user document grows larger with every task, you can't query tasks independently across users, and there's a MongoDB document size limit of 16MB. An alternative is a separate Task collection with a `userId` reference field (referenced documents), similar to SQL foreign keys.

---

**Q10: How do you handle errors in your Express app?**

> **Answer**: Every async controller uses a `try/catch` block. The catch block logs the error and returns `res.status(500).send({ success: false, message: 'Internal server error', error })`. For expected failures (user not found, validation failed), I return early with specific messages before trying DB operations. At the bottom of `server.js`, there's a catch-all middleware `server.use((req, res) => res.send({ message: 'Route not found' }))` that handles any unmatched route. One thing I'd improve: use a 4-argument Express error handler `(err, req, res, next)` for centralized error handling.

---

### Advanced Questions

**Q11: Your JWT expires in 120 seconds. How would you handle token refresh?**

> **Answer**: 120 seconds is very short for production. The standard approach is to issue two tokens: a short-lived `accessToken` (15 minutes) and a long-lived `refreshToken` (7 days). The refresh token is stored in an HTTP-only cookie (XSS-safe) or in the DB. When the access token expires, the client sends the refresh token to a `/api/auth/refresh` endpoint, which verifies it, and issues a new access token. To revoke refresh tokens (on logout or compromise), you store them in a `tokenBlacklist` collection in MongoDB.

---

**Q12: How would you add pagination to `getAllUsers`?**

> **Answer**: Currently `User.find()` returns all users. With pagination:
> ```js
> const page = parseInt(req.query.page) || 1
> const limit = parseInt(req.query.limit) || 10
> const skip = (page - 1) * limit
> const users = await User.find().skip(skip).limit(limit)
> const total = await User.countDocuments()
> res.send({ data: users, page, limit, total, pages: Math.ceil(total/limit) })
> ```
> This returns 10 users per page, client can request `?page=2&limit=10`.

---

**Q13: What are the security vulnerabilities in this project?**

> **Answer**:
> 1. **Short JWT expiry (120s)** — good for security, but users need to re-login constantly. Should implement refresh tokens.
> 2. **No rate limiting on login** — brute-force attacks possible. Add `express-rate-limit` on `/api/users/login`.
> 3. **Error objects exposed in responses** — `error: error` in 500 responses can leak stack traces. Strip in production.
> 4. **`.env` visible in git** — the `.env` file in `08-tasky-express-mongo` and `09-multi-user-tasky` shouldn't be committed (based on the actual values present, they appear to be dev keys, still bad practice).
> 5. **Admin credentials in seed** — default `Admin@tasky123` password in `admin.seed.js` should be in `.env`.
> 6. **No HTTPS enforcement** — should redirect HTTP to HTTPS in production.

---

**Q14: How does the role-based access control work and how could it be exploited?**

> **Answer**: RBAC works via the JWT payload containing `role: 'user'` or `role: 'admin'`. The `authMiddleware` loads the user from DB and cross-checks `user.role == decoded.data.role`. The `adminAuthMiddleware` loads from the `Admin` collection entirely, so a regular user can never reach admin routes even with a valid JWT. A potential exploit: if the JWT secret were leaked, an attacker could forge a token with `role: 'admin'` — but since DB role is cross-checked, they'd still need a valid admin `_id` that exists in the `Admin` collection. The defense is keeping the secret truly secret (in `.env`, never in code).

---

### Follow-Up Questions

**Q: Why use Resend instead of Nodemailer?**
> Resend is a modern email API (like SendGrid/Mailgun) — no SMTP config, good deliverability, simple API. Nodemailer requires an SMTP server. Both are used in this codebase (`03/` explores nodemailer; `09/` uses Resend).

**Q: Why store `arr_rating` in the movie document instead of just the average?**
> Storing all ratings lets you recalculate the average, find the distribution, or remove a specific user's rating later. Storing only the average is irreversible — you can't reconstruct the history.

**Q: Why is `dbInit` recursive?**
> After creating the new empty file, it calls itself once to verify the newly created file is readable. It's a one-level recursion — it won't recurse again because the file now exists. A simple safety confirmation.

---

## 9. RESUME HELP

### ATS-Friendly Bullet Points

```
• Built a multi-user task management REST API using Node.js, Express.js, and MongoDB with JWT-based authentication and role-based access control (user/admin)
• Implemented bcrypt password hashing with configurable salt rounds and email verification flow using the Resend API
• Designed Mongoose schemas with embedded documents (tasks within user documents), reducing query count by eliminating JOINs
• Developed reusable middleware pipeline for input validation, authentication, and authorization, reducing controller code by ~40%
• Built an admin dashboard backend supporting user management (create/disable/ban users) and task assignment across users
• Created a full CRUD REST API for a movie rating system with real-time average rating computation using Array.reduce()
• Implemented persistent browser-side applications (Expense Tracker, Task Manager) using DOM manipulation and localStorage
• Integrated Twilio SMS API and Resend email API for multi-channel user verification (email + phone)
• Designed MVC architecture from scratch — progressing from JSON file database to MongoDB, demonstrating database abstraction principles
```

### Project Summary (for resume)

**Multi-User Task Management API** | Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt
- Full-stack REST API with user registration, email/phone verification, and JWT authentication
- Role-based admin panel: create users, assign tasks, ban/disable accounts
- Secure password handling with bcrypt; stateless auth with JSON Web Tokens
- Modular architecture: routes → middleware → controllers → models

### Tech Stack Summary

```
Backend:   Node.js (v18+), Express.js 5.x
Database:  MongoDB Atlas, Mongoose 9.x
Auth:      JWT (jsonwebtoken), bcrypt
Services:  Resend (email), Twilio (SMS)
Frontend:  Vanilla JS, DOM API, localStorage, fetch
Tools:     nodemon, dotenv, cors, axios
Pattern:   MVC, REST, Middleware chain
```

### Measurable Impact Style Points

```
• Reduced DB query overhead by embedding tasks within user documents (single query vs. JOIN)
• Implemented 3-layer security: bcrypt hashing + email verification + JWT role-check
• Built admin seed script that auto-provisions default admin, eliminating manual DB setup on deployment
• Designed middleware chain that reduced controller boilerplate — validation logic is reusable across 4+ routes
• Implemented request logging middleware that persists every API call to server.log for audit trails
```

---

## 10. 1 HOUR BEFORE INTERVIEW

> Read only this section. Everything critical.

### Project One-Liner

"Multi-user task management REST API — Node.js + Express + MongoDB + JWT auth. Users register with email verification, login to get a JWT, and manage tasks. Admins can create/ban users and assign tasks."

---

### Request Flow (say this out loud)

```
Request → server.js → Router → Middleware (validate/authenticate) → Controller → MongoDB → Response
```

---

### Auth Flow (say this out loud)

```
Register: validate → hash password → generate email token → save user → send verification email
Login: find user → bcrypt compare → check verified → generate JWT → return token
Protected: extract header['auth-token'] → jwt.verify → load user from DB → check active → req.user → next()
```

---

### 5 Files You Must Know

1. **`09-multi-user-tasky/server/server.js`** — Express setup, middleware, routes, 404
2. **`09-multi-user-tasky/server/middlewares/auth.middlewares.js`** — JWT verification logic
3. **`09-multi-user-tasky/server/models/User.js`** — Schema with embedded tasks, role enum, status enum, tokens, verified flags
4. **`09-multi-user-tasky/server/controllers/user.controllers.js`** — registerUser + loginUser
5. **`09-multi-user-tasky/server/utils/jwt.js`** — `jwt.sign` with 120s expiry

---

### 5 Concepts You Must Nail

1. **Middleware**: `(req, res, next)` — validates, attaches to req, calls `next()`, OR sends response to stop chain
2. **JWT**: Signed token with payload. Sign on login, verify on each request. Stateless. Header: `auth-token`.
3. **bcrypt**: One-way hash. `hash()` on register. `compare()` on login. Salt prevents rainbow tables.
4. **Async/Await**: `await` pauses the async function (not Node.js). Non-blocking. Always wrap in `try/catch`.
5. **MVC**: Model = DB logic, Controller = business logic, Router = URL mapping. Never put DB code in routes.

---

### Don't Forget These

- `express.json()` must be registered before route handlers
- `{ new: true }` in `findByIdAndUpdate` to get updated document
- `dotenv.config()` before accessing `process.env`
- `"type": "module"` in package.json for ES Module imports
- Null-check after every `findById` / `findOne`
- `Number(process.env.SALT_ROUNDS)` — env vars are always strings
- JWT payload is Base64 encoded, NOT encrypted — don't put secrets in it

---

### Answer to "Tell me about your project"

> "I built a multi-user task management REST API using Node.js, Express, and MongoDB. It has a complete authentication system — users register, verify their email through a magic link sent via the Resend API, and then log in to receive a JWT. Protected routes use a custom middleware that extracts the JWT from the request header, verifies it, loads the user from MongoDB, and checks that their account is active. There's a separate admin role that can create users, assign tasks to them, and change their status. I used bcrypt for password hashing, Mongoose for the database layer with embedded task documents inside the user schema, and structured the code with a clean MVC pattern — routes, middleware, controllers, models, and utility functions all separated."

---

*Generated from live analysis of Phase-2 codebase — all concepts tied to actual files.*
