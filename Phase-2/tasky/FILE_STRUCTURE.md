# FILE_STRUCTURE.md — Tasky Project File Tree

## Complete Project Tree

```
tasky/
│
├── server.js               ← Entry point. Creates Express app, mounts middleware & routes
├── dbConnect.js            ← Connects to MongoDB using Mongoose (runs once on startup)
├── package.json            ← Project dependencies and npm scripts
├── .env                    ← Environment variables (never commit this!)
├── .env.example            ← Template showing what .env variables are needed
│
├── models/                 ← Mongoose schemas — define shape of DB documents
│   ├── User.js             ← User: name, email, password (hashed), timestamps
│   └── Task.js             ← Task: title, desc, priority, dueDate, completed, userId ref
│
├── controllers/            ← Business logic for each feature
│   ├── auth.controller.js  ← register(), login(), getMe()
│   └── task.controller.js  ← createTask(), getAllTasks(), updateTask(), toggleComplete(), deleteTask()
│
├── routes/                 ← URL → controller mappings (thin layer, no logic)
│   ├── auth.routes.js      ← POST /api/auth/register, POST /api/auth/login, GET /api/auth/me
│   └── task.routes.js      ← GET/POST /api/tasks, GET/PUT/DELETE /api/tasks/:id, PATCH /api/tasks/:id/toggle
│
├── middlewares/            ← Functions that run between request and controller
│   └── auth.middleware.js  ← Verifies JWT token, attaches user to req.user
│
├── utils/                  ← Reusable helper functions
│   ├── jwt.js              ← generateToken(), verifyToken() — wraps jsonwebtoken
│   └── bcrypt.js           ← hashPassword(), comparePassword() — wraps bcrypt
│
└── public/                 ← Static frontend files (served by Express)
    ├── index.html          ← Login page (default route)
    ├── register.html       ← Registration page
    ├── dashboard.html      ← Main app UI (protected)
    ├── style.css           ← All styles — dark theme, responsive layout
    ├── auth.js             ← Handles login + register form submissions
    └── app.js              ← Dashboard logic — task CRUD, filters, state management
```

---

## Why This Structure?

### Separation of Concerns
Each folder has ONE job:
- `models/` = data shape + DB interaction
- `controllers/` = business logic
- `routes/` = URL definitions
- `middlewares/` = request interceptors
- `utils/` = pure helper functions
- `public/` = user-facing UI

This is **MVC architecture** (Model-View-Controller):
- **M** = models/
- **V** = public/ (HTML/CSS/JS)
- **C** = controllers/

### Why NOT put everything in one file?
- Hard to find bugs (which file is responsible?)
- Hard to test individual pieces
- Hard to work in teams (merge conflicts)
- Breaks Single Responsibility Principle

---

## Request Flow (which files execute for GET /api/tasks)

```
Browser → server.js (route matching)
        → task.routes.js (matches /api/tasks GET)
        → auth.middleware.js (verifies JWT)
        → task.controller.js → getAllTasks()
        → models/Task.js (DB query)
        → MongoDB Atlas
        → models/Task.js (returns documents)
        → task.controller.js (builds response)
        → server.js (sends HTTP response)
        → Browser
```

---

## Key File Relationships

```
server.js
    imports ──→ dbConnect.js (runs MongoDB connection)
    imports ──→ routes/auth.routes.js
    imports ──→ routes/task.routes.js
    serves  ──→ public/ (static files)

routes/auth.routes.js
    imports ──→ controllers/auth.controller.js
    imports ──→ middlewares/auth.middleware.js (for /me route)

routes/task.routes.js
    imports ──→ controllers/task.controller.js
    imports ──→ middlewares/auth.middleware.js (for ALL routes)

controllers/auth.controller.js
    imports ──→ models/User.js
    imports ──→ utils/bcrypt.js
    imports ──→ utils/jwt.js

controllers/task.controller.js
    imports ──→ models/Task.js

middlewares/auth.middleware.js
    imports ──→ utils/jwt.js
    imports ──→ models/User.js

public/auth.js
    calls API ──→ POST /api/auth/login
    calls API ──→ POST /api/auth/register
    stores   ──→ localStorage (token, user)

public/app.js
    calls API ──→ /api/tasks (all CRUD)
    calls API ──→ /api/auth/me
    reads    ──→ localStorage (token for auth headers)
```
