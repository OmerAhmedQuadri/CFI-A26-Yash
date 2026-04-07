const INPUT_TASK = document.getElementById('input')
const ADD_BTN = document.getElementById('add-btn')
const TASKS_DISPLAY = document.getElementById('task-list')
let tasks = JSON.parse(localStorage.getItem('tasks')) || []

renderTasks()

ADD_BTN.addEventListener('click', () => {
    let newTask = {
        taskId : Date.now(),
        taskname : INPUT_TASK.value.trim(),
        completed : false
    }

    if(!newTask.taskname) return

    tasks.push(newTask)
    renderTasks()
    saveTasks()
    INPUT_TASK.value=''
    INPUT_TASK.focus()
})

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function renderTasks() {
    TASKS_DISPLAY.innerHTML=''
    if(tasks.length == 0){
        TASKS_DISPLAY.innerHTML='No Tasks Found'
        return
    }
    
    tasks.forEach( t => {
        const li = document.createElement('li')
        const p = document.createElement('p')
        const button = document.createElement('button')
        button.innerHTML='delete'
        p.innerHTML = t.taskname
        
        li.addEventListener('click', () => {
            li.classList.toggle('completed')
            const index = tasks.findIndex(task => task.taskId == t.taskId)
            tasks[index].completed = !tasks[index].completed
            saveTasks() 
        })
        
        button.addEventListener('click', () => {
            li.remove()
            tasks = tasks.filter(task => task.taskId != t.taskId)
            saveTasks()
            if(tasks.length == 0){
                TASKS_DISPLAY.innerHTML='No Tasks Found'
                return
            }
        })

        if (t.completed) li.classList.add('completed')

        li.append(p,button)
        TASKS_DISPLAY.append(li)
    });
}