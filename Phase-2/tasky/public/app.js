// ============================================================
// app.js — Dashboard logic for Tasky
//
// INTERVIEW CONCEPTS DEMONSTRATED:
// 1. Authentication guard (redirect if no token)
// 2. Fetch API with JWT Authorization header
// 3. DOM manipulation — creating, updating, removing elements
// 4. Event delegation — single listener on parent for all children
// 5. Closures — functions retaining access to outer scope variables
// 6. Debouncing — limiting how often a function fires
// 7. Filter/search/sort — client-side data manipulation
// 8. Toast notifications — non-blocking user feedback
//
// ARCHITECTURE:
// - State is stored in a single `state` object (source of truth)
// - renderTasks() re-renders the full list from current state
// - Any change (add/update/delete) updates `state.tasks` then re-renders
// This is a simplified version of how React's state management works.
// ============================================================

// ── CONSTANTS & STATE ─────────────────────────────────────────
const API = '/api/tasks'
const AUTH_API = '/api/auth'

// Single source of truth for the app's data
// INTERVIEW: Why centralize state? So UI is always a reflection of data.
// When data changes, re-render. Never manipulate DOM directly as source of truth.
const state = {
    tasks: [],           // all tasks fetched from server
    filter: {
        search: '',
        status: 'all',   // 'all' | 'active' | 'completed'
        priority: 'all', // 'all' | 'low' | 'medium' | 'high'
        sort: 'newest'   // 'newest' | 'oldest' | 'priority' | 'dueDate'
    }
}

// ── AUTH GUARD ────────────────────────────────────────────────
// INTERVIEW: Every protected page must check for a token on load.
// If there's no token → redirect to login. This is client-side auth guarding.
// Note: This is NOT a security measure — the server enforces real auth.
// This is just UX (show login page instead of broken dashboard).
const token = localStorage.getItem('tasky_token')
if (!token) {
    window.location.href = '/'
}

// ── DOM ELEMENT REFERENCES ────────────────────────────────────
// Cache DOM references once — it's faster than querying every render
const tasksList = document.getElementById('tasks-list')
const tasksCount = document.getElementById('tasks-count')
const addTaskForm = document.getElementById('add-task-form')
const searchInput = document.getElementById('search-input')
const filterStatus = document.getElementById('filter-status')
const filterPriority = document.getElementById('filter-priority')
const filterSort = document.getElementById('filter-sort')
const editModal = document.getElementById('edit-modal')
const editTaskForm = document.getElementById('edit-task-form')
const logoutBtn = document.getElementById('logout-btn')
const userNameEl = document.getElementById('user-name')
const headerGreeting = document.getElementById('header-greeting')

// Stats elements
const statTotal = document.getElementById('stat-total')
const statActive = document.getElementById('stat-active')
const statCompleted = document.getElementById('stat-completed')
const statHigh = document.getElementById('stat-high')

// ── API HELPER ────────────────────────────────────────────────
// INTERVIEW: This is a "wrapper" or "helper" function that abstracts
// the fetch() calls. It adds the Authorization header automatically
// and handles JSON parsing, so controllers don't repeat this code.
// This is the DRY principle: Don't Repeat Yourself.
async function apiFetch(url, options = {}) {
    const config = {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            // INTERVIEW: JWT is sent in the Authorization header.
            // The "Bearer" prefix is a convention from OAuth 2.0.
            'Authorization': `Bearer ${token}`,
            ...options.headers
        }
    }

    const response = await fetch(url, config)
    const data = await response.json()

    // If server returns 401, token is invalid/expired → force logout
    if (response.status === 401) {
        logout()
        return
    }

    return data
}

// ── TOAST NOTIFICATIONS ───────────────────────────────────────
// INTERVIEW: Toasts are non-blocking notifications.
// They appear briefly then disappear — good UX for confirming actions.
// We use setTimeout for the auto-dismiss — this is the Event Loop at work.
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container')

    const toast = document.createElement('div')
    toast.className = `toast ${type}`

    const icon = { success: '✓', error: '✕', warning: '⚠' }[type] || 'ℹ'
    toast.innerHTML = `<span>${icon}</span> ${message}`

    container.appendChild(toast)

    // Remove after 3 seconds using setTimeout (event loop / callback queue)
    setTimeout(() => {
        toast.remove()
    }, 3000)
}

// ── INITIALIZE APP ────────────────────────────────────────────
async function init() {
    await loadUser()
    await loadTasks()
}

// Load current user from /api/auth/me
async function loadUser() {
    try {
        // Try localStorage first (fast, no network)
        const cached = localStorage.getItem('tasky_user')
        if (cached) {
            const user = JSON.parse(cached)
            userNameEl.textContent = user.name
            headerGreeting.textContent = `— ${getGreeting()}`
            return
        }

        // Fallback: fetch from server
        const data = await apiFetch(`${AUTH_API}/me`)
        if (data?.success) {
            userNameEl.textContent = data.data.name
            headerGreeting.textContent = `— ${getGreeting()}`
            localStorage.setItem('tasky_user', JSON.stringify(data.data))
        }
    } catch (error) {
        console.error('[loadUser]', error)
    }
}

// Returns a time-of-day greeting
function getGreeting() {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning!'
    if (hour < 17) return 'Good afternoon!'
    return 'Good evening!'
}

// ── LOAD TASKS FROM SERVER ────────────────────────────────────
async function loadTasks() {
    tasksList.innerHTML = `
        <div class="loading-state">
            <div class="loader"></div>
            <p style="margin-top: 12px;">Loading tasks...</p>
        </div>
    `

    try {
        // INTERVIEW: This is an async await pattern.
        // Without async/await, we'd use .then().catch() chains (callback hell).
        // await pauses execution here until the Promise resolves.
        const data = await apiFetch(API)

        if (data?.success) {
            state.tasks = data.data
            renderTasks()
            updateStats()
        } else {
            tasksList.innerHTML = '<div class="empty-state"><span class="empty-icon">⚠</span><p>Failed to load tasks.</p></div>'
        }
    } catch (error) {
        console.error('[loadTasks]', error)
        tasksList.innerHTML = '<div class="empty-state"><span class="empty-icon">⚠</span><p>Network error loading tasks.</p></div>'
    }
}

// ── FILTER + SORT TASKS ───────────────────────────────────────
// INTERVIEW: This is pure data transformation — no DOM involved.
// We take the raw tasks array and return a filtered/sorted copy.
// The original state.tasks is never mutated here (immutability principle).
function getFilteredTasks() {
    let tasks = [...state.tasks]  // shallow copy — don't mutate original

    // 1. Filter by search text
    if (state.filter.search) {
        const query = state.filter.search.toLowerCase()
        tasks = tasks.filter(t =>
            t.title.toLowerCase().includes(query) ||
            t.description?.toLowerCase().includes(query)
        )
    }

    // 2. Filter by status
    if (state.filter.status === 'active') {
        tasks = tasks.filter(t => !t.completed)
    } else if (state.filter.status === 'completed') {
        tasks = tasks.filter(t => t.completed)
    }

    // 3. Filter by priority
    if (state.filter.priority !== 'all') {
        tasks = tasks.filter(t => t.priority === state.filter.priority)
    }

    // 4. Sort
    // INTERVIEW: Array.sort() mutates in place, so we work on the copy
    const priorityOrder = { high: 0, medium: 1, low: 2 }

    if (state.filter.sort === 'newest') {
        tasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    } else if (state.filter.sort === 'oldest') {
        tasks.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    } else if (state.filter.sort === 'priority') {
        tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])
    } else if (state.filter.sort === 'dueDate') {
        // Tasks with no due date go to the end
        tasks.sort((a, b) => {
            if (!a.dueDate) return 1
            if (!b.dueDate) return -1
            return new Date(a.dueDate) - new Date(b.dueDate)
        })
    }

    return tasks
}

// ── RENDER TASKS ──────────────────────────────────────────────
// INTERVIEW: This function re-renders the entire task list.
// It reads from state.tasks, applies filters, and builds DOM.
// This is the "one-way data flow" pattern: state → UI.
function renderTasks() {
    const filtered = getFilteredTasks()

    tasksCount.textContent = `${filtered.length} task${filtered.length !== 1 ? 's' : ''} shown`

    if (filtered.length === 0) {
        tasksList.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">${state.tasks.length === 0 ? '📋' : '🔍'}</span>
                <p>${state.tasks.length === 0
                    ? 'No tasks yet. Add your first task above!'
                    : 'No tasks match your filters.'}</p>
            </div>
        `
        return
    }

    // INTERVIEW: innerHTML replacement is simple but clears all event listeners.
    // We use EVENT DELEGATION (see below) to handle this elegantly.
    tasksList.innerHTML = filtered.map(task => createTaskHTML(task)).join('')
}

// Build the HTML string for a single task card
// INTERVIEW: Template literals (backticks) allow multi-line strings
// and interpolation with ${expression}
function createTaskHTML(task) {
    const isOverdue = task.dueDate && !task.completed && new Date(task.dueDate) < new Date()
    const dueDateStr = task.dueDate
        ? new Date(task.dueDate).toLocaleDateString('en-IN', {
            day: 'numeric', month: 'short', year: 'numeric'
          })
        : ''

    return `
        <div class="task-card ${task.completed ? 'completed' : ''}" data-id="${task._id}">
            <div class="task-checkbox ${task.completed ? 'checked' : ''}"
                 data-action="toggle"
                 data-id="${task._id}"
                 title="${task.completed ? 'Mark as active' : 'Mark as complete'}"
            ></div>

            <div class="task-content">
                <p class="task-title">${escapeHTML(task.title)}</p>
                ${task.description
                    ? `<p class="task-description">${escapeHTML(task.description)}</p>`
                    : ''}
                <div class="task-meta">
                    <span class="priority-badge priority-${task.priority}">
                        ${task.priority}
                    </span>
                    ${dueDateStr
                        ? `<span class="due-date ${isOverdue ? 'overdue' : ''}">
                            📅 ${dueDateStr}${isOverdue ? ' (overdue)' : ''}
                           </span>`
                        : ''}
                </div>
            </div>

            <div class="task-actions">
                <button class="btn btn-ghost btn-sm"
                    data-action="edit"
                    data-id="${task._id}"
                    title="Edit task">
                    ✏
                </button>
                <button class="btn btn-danger btn-sm"
                    data-action="delete"
                    data-id="${task._id}"
                    title="Delete task">
                    🗑
                </button>
            </div>
        </div>
    `
}

// ── EVENT DELEGATION ──────────────────────────────────────────
// INTERVIEW: Event delegation is attaching ONE event listener to
// a PARENT element instead of one per child.
//
// Why? Because our task cards are dynamically created (innerHTML).
// After re-rendering, old listeners on removed nodes are gone.
// With delegation: parent's listener catches all child events via bubbling.
//
// Event Bubbling: when a child element is clicked, the event "bubbles up"
// through all ancestor elements until it reaches the document root.
// event.target = the element that was actually clicked.
// event.currentTarget = the element with the listener (tasksList).
tasksList.addEventListener('click', async (event) => {
    // Find the button or element with a data-action attribute
    // Could be a child element (icon) was clicked, so we traverse up with .closest()
    const actionEl = event.target.closest('[data-action]')
    if (!actionEl) return  // click was not on an action element

    const action = actionEl.dataset.action
    const taskId = actionEl.dataset.id

    if (action === 'toggle') await handleToggle(taskId)
    if (action === 'edit') openEditModal(taskId)
    if (action === 'delete') await handleDelete(taskId)
})

// ── TOGGLE COMPLETE ───────────────────────────────────────────
async function handleToggle(taskId) {
    try {
        const data = await apiFetch(`${API}/${taskId}/toggle`, { method: 'PATCH' })

        if (data?.success) {
            // Update task in local state — find and update, then re-render
            const idx = state.tasks.findIndex(t => t._id === taskId)
            if (idx !== -1) {
                state.tasks[idx] = data.data
                renderTasks()
                updateStats()
            }
            showToast(data.message)
        } else {
            showToast(data?.message || 'Failed to update task', 'error')
        }
    } catch (error) {
        showToast('Network error', 'error')
    }
}

// ── DELETE TASK ───────────────────────────────────────────────
async function handleDelete(taskId) {
    // Confirm before destructive action
    if (!confirm('Delete this task? This cannot be undone.')) return

    try {
        const data = await apiFetch(`${API}/${taskId}`, { method: 'DELETE' })

        if (data?.success) {
            // Remove from local state and re-render (no network call needed)
            state.tasks = state.tasks.filter(t => t._id !== taskId)
            renderTasks()
            updateStats()
            showToast('Task deleted')
        } else {
            showToast(data?.message || 'Failed to delete task', 'error')
        }
    } catch (error) {
        showToast('Network error', 'error')
    }
}

// ── ADD TASK ──────────────────────────────────────────────────
addTaskForm.addEventListener('submit', async (event) => {
    event.preventDefault()

    const title = document.getElementById('task-title').value.trim()
    const priority = document.getElementById('task-priority').value
    const dueDate = document.getElementById('task-due').value
    const description = document.getElementById('task-desc').value.trim()

    if (!title) {
        showToast('Please enter a task title', 'warning')
        return
    }

    const addBtn = document.getElementById('add-task-btn')
    addBtn.disabled = true
    addBtn.textContent = 'Adding...'

    try {
        const data = await apiFetch(API, {
            method: 'POST',
            body: JSON.stringify({ title, priority, dueDate: dueDate || null, description })
        })

        if (data?.success) {
            // Prepend new task to local state (so it shows at the top)
            state.tasks.unshift(data.data)
            renderTasks()
            updateStats()
            addTaskForm.reset()
            showToast('Task added successfully!')
            // Scroll to task list
            document.querySelector('.tasks-section').scrollIntoView({ behavior: 'smooth' })
        } else {
            showToast(data?.message || 'Failed to create task', 'error')
        }
    } catch (error) {
        showToast('Network error', 'error')
        console.error('[addTask]', error)
    } finally {
        addBtn.disabled = false
        addBtn.textContent = 'Add Task'
    }
})

// ── EDIT MODAL ────────────────────────────────────────────────
function openEditModal(taskId) {
    const task = state.tasks.find(t => t._id === taskId)
    if (!task) return

    // Populate modal fields with current task data
    document.getElementById('edit-task-id').value = task._id
    document.getElementById('edit-title').value = task.title
    document.getElementById('edit-priority').value = task.priority
    document.getElementById('edit-due').value = task.dueDate
        ? new Date(task.dueDate).toISOString().split('T')[0]
        : ''
    document.getElementById('edit-desc').value = task.description || ''

    editModal.classList.remove('hidden')
}

function closeModal() {
    editModal.classList.add('hidden')
    editTaskForm.reset()
}

// Close modal on close button or cancel button
document.getElementById('modal-close-btn').addEventListener('click', closeModal)
document.getElementById('modal-cancel-btn').addEventListener('click', closeModal)

// Close modal when clicking outside (on overlay)
editModal.addEventListener('click', (event) => {
    if (event.target === editModal) closeModal()
})

// Edit form submission
editTaskForm.addEventListener('submit', async (event) => {
    event.preventDefault()

    const taskId = document.getElementById('edit-task-id').value
    const title = document.getElementById('edit-title').value.trim()
    const priority = document.getElementById('edit-priority').value
    const dueDate = document.getElementById('edit-due').value
    const description = document.getElementById('edit-desc').value.trim()

    if (!title) {
        showToast('Title is required', 'warning')
        return
    }

    try {
        const data = await apiFetch(`${API}/${taskId}`, {
            method: 'PUT',
            body: JSON.stringify({ title, priority, dueDate: dueDate || null, description })
        })

        if (data?.success) {
            const idx = state.tasks.findIndex(t => t._id === taskId)
            if (idx !== -1) state.tasks[idx] = data.data
            renderTasks()
            updateStats()
            closeModal()
            showToast('Task updated!')
        } else {
            showToast(data?.message || 'Failed to update task', 'error')
        }
    } catch (error) {
        showToast('Network error', 'error')
    }
})

// ── FILTER LISTENERS ──────────────────────────────────────────
// INTERVIEW: Debouncing — for the search input, we don't want to
// filter on every single keypress. We wait until the user stops
// typing for 300ms. This is a performance optimization.
let debounceTimer

searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => {
        state.filter.search = searchInput.value.trim()
        renderTasks()
    }, 300)
})

filterStatus.addEventListener('change', () => {
    state.filter.status = filterStatus.value
    renderTasks()
})

filterPriority.addEventListener('change', () => {
    state.filter.priority = filterPriority.value
    renderTasks()
})

filterSort.addEventListener('change', () => {
    state.filter.sort = filterSort.value
    renderTasks()
})

// ── UPDATE STATS ──────────────────────────────────────────────
function updateStats() {
    const total = state.tasks.length
    const completed = state.tasks.filter(t => t.completed).length
    const active = total - completed
    const high = state.tasks.filter(t => t.priority === 'high' && !t.completed).length

    statTotal.textContent = total
    statActive.textContent = active
    statCompleted.textContent = completed
    statHigh.textContent = high
}

// ── LOGOUT ────────────────────────────────────────────────────
function logout() {
    // INTERVIEW: Logout is just clearing the stored token.
    // Since JWT is stateless, there's no "server-side logout".
    // For true invalidation you'd need a token blacklist in DB.
    localStorage.removeItem('tasky_token')
    localStorage.removeItem('tasky_user')
    window.location.href = '/'
}

logoutBtn.addEventListener('click', logout)

// ── SECURITY: Escape HTML to prevent XSS ─────────────────────
// INTERVIEW: XSS (Cross-Site Scripting) — if a user sets their
// task title to '<script>alert("hacked")</script>' and we inject
// it directly into innerHTML, that script would execute!
// escapeHTML() converts < > " & to their HTML entities,
// so they render as text, not as HTML/code.
function escapeHTML(str) {
    const div = document.createElement('div')
    div.appendChild(document.createTextNode(str))
    return div.innerHTML
}

// ── START THE APP ─────────────────────────────────────────────
init()
