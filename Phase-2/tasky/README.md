# Tasky — Full-Stack Task Management App

A production-style task management application built with Node.js, Express, MongoDB, and Vanilla JavaScript.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Runtime | Node.js (ESM modules) |
| Framework | Express 5 |
| Database | MongoDB Atlas (Mongoose ODM) |
| Auth | JWT (jsonwebtoken) |
| Passwords | bcrypt |
| Frontend | Vanilla JS, HTML5, CSS3 |

---

## Project Structure

```
tasky/
├── server.js                 # Entry point
├── dbConnect.js              # MongoDB connection
├── package.json
├── .env                      # Environment variables
├── .env.example              # Template
├── models/
│   ├── User.js               # User schema
│   └── Task.js               # Task schema (with userId ref)
├── controllers/
│   ├── auth.controller.js    # register, login, getMe
│   └── task.controller.js    # CRUD + toggle
├── routes/
│   ├── auth.routes.js        # /api/auth/*
│   └── task.routes.js        # /api/tasks/*
├── middlewares/
│   └── auth.middleware.js    # JWT verification guard
├── utils/
│   ├── jwt.js                # generateToken, verifyToken
│   └── bcrypt.js             # hashPassword, comparePassword
├── public/                   # Static frontend (served by Express)
│   ├── index.html            # Login page
│   ├── register.html         # Register page
│   ├── dashboard.html        # Main app
│   ├── style.css             # All styles
│   ├── auth.js               # Login/register logic
│   └── app.js                # Dashboard logic
└── docs/
    ├── PROJECT_EXPLANATION.md
    ├── CODE_FLOW.md
    ├── INTERVIEW_PREP.md
    └── FILE_STRUCTURE.md
```

---

## Setup & Installation

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (or local MongoDB)

### 1. Clone / Navigate to project
```bash
cd tasky
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
```bash
cp .env.example .env
```

Edit `.env`:
```env
PORT=3000
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/tasky
JWT_SECRET=your-very-long-random-secret-here
JWT_EXPIRES_IN=7d
BCRYPT_SALT_ROUNDS=10
```

### 4. Run the server

**Development (auto-restart):**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

### 5. Open in browser
```
http://localhost:3000
```

---

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `MONGO_URL` | MongoDB connection string | `mongodb+srv://...` |
| `JWT_SECRET` | Secret key for signing JWTs | Random long string |
| `JWT_EXPIRES_IN` | Token lifetime | `7d`, `24h`, `120` (seconds) |
| `BCRYPT_SALT_ROUNDS` | bcrypt cost factor | `10` |

---

## API Documentation

### Authentication Routes (`/api/auth`)

#### POST /api/auth/register
Create a new user account.

**Request body:**
```json
{
    "name": "Yash Reddy",
    "email": "yash@example.com",
    "password": "securepassword"
}
```

**Response (201):**
```json
{
    "success": true,
    "message": "Account created successfully",
    "data": {
        "user": { "id": "...", "name": "Yash Reddy", "email": "yash@example.com" },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
}
```

---

#### POST /api/auth/login
Login with email and password.

**Request body:**
```json
{
    "email": "yash@example.com",
    "password": "securepassword"
}
```

**Response (200):**
```json
{
    "success": true,
    "message": "Login successful",
    "data": {
        "user": { "id": "...", "name": "Yash Reddy", "email": "..." },
        "token": "eyJhbGci..."
    }
}
```

---

#### GET /api/auth/me
Get current user profile. **Requires JWT.**

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
    "success": true,
    "data": { "id": "...", "name": "Yash Reddy", "email": "..." }
}
```

---

### Task Routes (`/api/tasks`) — All require JWT

**Headers for all task routes:**
```
Authorization: Bearer <token>
Content-Type: application/json
```

#### GET /api/tasks
Get all tasks. Supports filtering and sorting via query parameters.

**Query parameters:**
| Parameter | Values | Description |
|-----------|--------|-------------|
| `priority` | `low`, `medium`, `high`, `all` | Filter by priority |
| `completed` | `true`, `false`, `all` | Filter by completion |
| `search` | any string | Search in title |
| `sort` | `newest`, `oldest`, `priority`, `dueDate` | Sort order |

**Example:** `GET /api/tasks?priority=high&completed=false&sort=dueDate`

**Response (200):**
```json
{
    "success": true,
    "data": [
        {
            "_id": "65f123...",
            "title": "Finish interview prep",
            "description": "Cover DOM, JWT, MongoDB",
            "priority": "high",
            "dueDate": "2024-03-20T00:00:00.000Z",
            "completed": false,
            "userId": "65e098...",
            "createdAt": "2024-03-13T10:00:00.000Z",
            "updatedAt": "2024-03-13T10:00:00.000Z"
        }
    ],
    "count": 1
}
```

---

#### POST /api/tasks
Create a new task.

**Request body:**
```json
{
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "priority": "medium",
    "dueDate": "2024-03-15"
}
```

**Response (201):**
```json
{
    "success": true,
    "message": "Task created successfully",
    "data": { /* created task object */ }
}
```

---

#### PUT /api/tasks/:id
Update a task.

**Request body (any combination):**
```json
{
    "title": "Updated title",
    "priority": "high",
    "dueDate": "2024-03-20",
    "completed": true
}
```

---

#### PATCH /api/tasks/:id/toggle
Toggle the completed status (true → false → true).

**No body required.**

---

#### DELETE /api/tasks/:id
Delete a task permanently.

---

## Features

### Backend
- JWT-based stateless authentication
- bcrypt password hashing (10 salt rounds)
- RESTful API design
- Mongoose validation on all schemas
- User-scoped task operations (authorization)
- MongoDB indexing for performance
- Centralized error handling
- CORS enabled

### Frontend
- Responsive dark theme UI
- Real-time task statistics
- Filter by status, priority, and free-text search
- Sort by date, priority, or due date
- Debounced search input
- Inline edit modal
- Toast notifications
- Event delegation for performance
- XSS prevention via HTML escaping
- localStorage for token persistence

---

## Architecture Decisions

### Why separate Task collection instead of embedding in User?
- MongoDB has 16MB document size limit
- Can query tasks independently (e.g., "all overdue tasks across all users" for admin)
- Cleaner separation of concerns
- Easier to add task-level features later (comments, attachments, sharing)

### Why localStorage for JWT instead of cookies?
- Simpler for a learning project (no cookie configuration)
- Cookies with `httpOnly` flag would be more secure for production (XSS-proof)
- Token sent manually in `Authorization` header (doesn't auto-send with every request)

### Why Vanilla JS instead of React?
- Learning fundamentals (DOM, event delegation, fetch API, closures)
- No build step required
- Demonstrates that you understand what frameworks do for you

---

## Learning Resources

- `PROJECT_EXPLANATION.md` — every file explained with interview context
- `CODE_FLOW.md` — step-by-step execution traces for all key flows
- `INTERVIEW_PREP.md` — 25+ interview Q&As with examples from this code
- `FILE_STRUCTURE.md` — project architecture overview

---

## Evolved From

This project synthesizes learning from:
- **05-tasky** — file-based task CRUD with Express (no DB)
- **08-tasky-express-mongo** — MongoDB integration, Mongoose models
- **09-multi-user-tasky** — JWT auth, bcrypt, multi-user architecture
- **10-dom/tasky** — frontend DOM manipulation, localStorage, event handling

Each limitation in the older projects was solved in this final version.
