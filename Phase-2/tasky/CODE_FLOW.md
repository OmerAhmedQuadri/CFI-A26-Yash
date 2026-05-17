# CODE_FLOW.md — Step-by-Step Execution Flows

## 1. What Happens When You Start the Server

```
$ node server.js
```

1. Node.js executes `server.js`
2. `import './dbConnect.js'` runs → Mongoose calls `mongoose.connect(MONGO_URL)`
3. MongoDB Atlas handshake completes → logs "✅ MongoDB connected"
4. Express `app` is configured with middleware (cors, express.json, express.static)
5. Routes are registered: `/api/auth/*` and `/api/tasks/*`
6. `app.listen(3000)` → Node's HTTP server starts listening on port 3000
7. Server is ready to accept requests

---

## 2. User Registration Flow

**Trigger:** User fills register form, clicks "Create Account"

### Frontend (public/auth.js)
```
submit event fires
→ event.preventDefault() stops page reload
→ reads: name, email, password from DOM inputs
→ client-side validation (length checks)
→ fetch('POST /api/auth/register', { body: JSON.stringify({name, email, password}) })
→ awaits response
→ if success: stores token in localStorage → redirect to /dashboard.html
→ if error: shows error message in DOM
```

### Backend (server.js → routes → controller → DB)
```
HTTP request arrives at Express
→ cors middleware: adds CORS headers to response
→ express.json() middleware: parses JSON body → req.body = { name, email, password }
→ Router matches POST /api/auth/register
→ auth.controller.js → register() executes:
    1. Destructures { name, email, password } from req.body
    2. Validates: all fields present? password >= 6 chars?
    3. User.findOne({ email }) → checks for duplicates
    4. hashPassword(password) → bcrypt generates salt + hashes
    5. User.create({ name, email, password: hashed }) → INSERT into MongoDB
    6. generateToken({ id, email, name }) → jwt.sign() → returns JWT string
    7. res.status(201).json({ success: true, data: { user, token } })
→ HTTP 201 response sent to browser
```

---

## 3. User Login Flow

**Trigger:** User fills login form, clicks "Sign In"

```
FRONTEND:
  submit event → read email + password
  → fetch POST /api/auth/login
  → await response

BACKEND:
  express.json() → parses body
  → auth.routes.js → POST /login → login() controller
  → User.findOne({ email }) → find user in DB
  → if not found: return 401 "Invalid email or password"
  → comparePassword(plainPassword, user.password) → bcrypt.compare()
  → if mismatch: return 401 "Invalid email or password"
  → generateToken({ id, email, name }) → JWT string
  → return 200 { success: true, data: { user, token } }

FRONTEND (on success):
  → localStorage.setItem('tasky_token', token)
  → localStorage.setItem('tasky_user', JSON.stringify(user))
  → window.location.href = '/dashboard.html'
```

---

## 4. Dashboard Load Flow (Protected Page)

**Trigger:** Browser navigates to /dashboard.html

```
1. Browser requests /dashboard.html
   → Express static serves the file

2. dashboard.html loads → <script src="app.js"> executes

3. app.js runs:
   → reads localStorage.getItem('tasky_token')
   → if no token → window.location.href = '/' (redirect to login)
   → if token exists → continues

4. init() called:
   → loadUser(): reads localStorage for cached user, shows name in header
   → loadTasks(): fetch GET /api/tasks with Authorization: Bearer <token>

5. GET /api/tasks reaches server:
   → express matches /api/tasks GET
   → task.routes.js → router.use(authMiddleware) runs first

6. authMiddleware runs:
   → reads req.headers['authorization'] → "Bearer eyJhbGci..."
   → splits and extracts token
   → verifyToken(token) → jwt.verify() → decodes payload
   → User.findById(decoded.id) → finds user in DB
   → req.user = user → calls next()

7. getAllTasks() controller runs:
   → Task.find({ userId: req.user._id }) → fetches user's tasks from DB
   → res.json({ success: true, data: tasks })

8. app.js receives response:
   → state.tasks = data.data (stores in app state)
   → renderTasks() builds task card HTML
   → updateStats() updates stat numbers
```

---

## 5. Creating a Task Flow

**Trigger:** User fills add-task form, clicks "Add Task"

```
FRONTEND (app.js):
  form submit event fires
  → reads: title, priority, dueDate, description
  → validates: title not empty
  → fetch('POST /api/tasks', {
       headers: { Authorization: Bearer <token> },
       body: JSON.stringify({ title, priority, dueDate, description })
    })

BACKEND:
  → auth.middleware.js verifies token → req.user set
  → task.controller.js createTask():
      → validates title present
      → validates priority enum
      → Task.create({ title, description, priority, dueDate, userId: req.user._id })
      → MongoDB inserts document into 'tasks' collection
      → returns 201 with created task

FRONTEND (on success):
  → state.tasks.unshift(data.data)  // add to front of array
  → renderTasks()                   // re-render full list
  → updateStats()                   // update counts
  → addTaskForm.reset()             // clear form
  → showToast('Task added!')        // notification
```

---

## 6. JWT Auth Middleware Flow (Every Protected Request)

```
Request arrives at /api/tasks/*
          │
          ▼
router.use(authMiddleware)
          │
    Read Authorization header
          │
    Not present? ──→ 401 "No token provided"
          │
    Extract token (split "Bearer TOKEN")
          │
    verifyToken(token) [jwt.verify()]
          │
    Invalid/expired? ──→ 401 "Invalid/expired token"
          │
    Extract decoded.id from payload
          │
    User.findById(decoded.id)
          │
    User not found? ──→ 401 "User not found"
          │
    req.user = user
          │
    next() ──→ proceeds to route controller
```

---

## 7. Toggle Task Complete Flow

**Trigger:** User clicks checkbox on a task card

```
FRONTEND (app.js):
  click event bubbles up to tasksList (event delegation)
  → event.target.closest('[data-action]') → finds checkbox element
  → data-action = "toggle", data-id = task._id
  → handleToggle(taskId) called
  → fetch('PATCH /api/tasks/:id/toggle', { method: 'PATCH' })

BACKEND:
  → authMiddleware verifies token
  → toggleComplete() controller:
      → Task.findOne({ _id: id, userId: req.user._id })
      → task.completed = !task.completed  // flip boolean
      → task.save()  // saves and updates updatedAt
      → res.json({ success: true, data: task })

FRONTEND:
  → state.tasks[idx] = data.data  // update local state
  → renderTasks()                  // re-render
  → showToast("Task marked as complete/active")
```

---

## 8. Request-Response Lifecycle (Complete Picture)

```
[Browser]                    [Express Server]                  [MongoDB]
    │                               │                               │
    │── HTTP Request ──────────────→│                               │
    │   (method, url, headers,      │                               │
    │    body, query params)        │                               │
    │                               │                               │
    │                          Middleware Stack runs:               │
    │                          1. cors()                            │
    │                          2. express.json() → parses body      │
    │                          3. express.static() → check if file  │
    │                          4. Match route → find handler        │
    │                          5. authMiddleware (if protected)     │
    │                          6. Controller function runs          │
    │                               │                               │
    │                               │── mongoose query ────────────→│
    │                               │                               │
    │                               │←─ MongoDB documents ─────────│
    │                               │                               │
    │                               │  Build response object        │
    │                               │  res.json({ success, data })  │
    │                               │                               │
    │←─ HTTP Response ──────────────│                               │
    │   (status code, JSON body)    │                               │
    │                               │                               │
    │  Browser receives data        │                               │
    │  Update DOM / state           │                               │
```

---

## 9. Event Loop & Asynchronous Flow

```
Single-threaded Node.js with event loop:

  ┌─────────────────────────────┐
  │   Call Stack (synchronous)  │
  │   express middleware chain  │
  └──────────────┬──────────────┘
                 │ async operation (DB query, file read)
                 ▼
  ┌─────────────────────────────┐
  │   Web APIs / libuv          │
  │   (mongoose, fs, http)      │
  └──────────────┬──────────────┘
                 │ operation completes → callback queued
                 ▼
  ┌─────────────────────────────┐
  │   Callback / Microtask Queue│
  │   (Promise.then handlers)   │
  └──────────────┬──────────────┘
                 │ call stack is empty → pick up callback
                 ▼
            Back to Call Stack

RESULT: Server can handle many concurrent requests
because while waiting for MongoDB, it handles other requests.
This is why Node.js is great for I/O-heavy apps.
```
