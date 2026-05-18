import { useEffect, useRef, useState } from "react";

const App = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  )
  const inputRef = useRef()
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
    inputRef.current.focus()
  }, [taskList]);


  const addTaskHandler = () => {
    if (task.trim() != '') {
      const newTask = {
        id: Date.now(),
        title: task,
        isDone: false,
      }
      setTaskList([...taskList, newTask])
      setTask('')
    }
  }

  const statusHandler = (e, index) => {
    if (e.target.tagName == 'LI' || e.target.tagName == 'P') {
      const newTaskList = [...taskList]
      newTaskList[index].isDone = !newTaskList[index].isDone
      setTaskList(newTaskList)
    }
    else if (e.target.tagName == 'BUTTON') {
      const newTaskList = [...taskList]
      newTaskList.splice(index, 1)
      setTaskList(newTaskList)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-700 text-white">
      <div className="flex flex-col border-2 border-gray-900 p-4 rounded-lg min-h-100 bg-slate-800 gap-4">
        <div className="flex gap-3">
          <input
            placeholder="Enter your task here"
            className="border-2 border-gray-900 py-2 px-4 w-full rounded-lg font-bold bg-slate-600 text-white "
            type="text"
            onChange={(e) => setTask(e.target.value)}
            value={task}
            ref={inputRef}
          />
          <button
            onClick={addTaskHandler}
            className="py-1 px-4 border-2 border-gray-900 rounded-lg bg-yellow-500 hover:opacity-90"
          >Add</button>
        </div>
        <ul className="flex flex-col w-full border-2 border-gray-900 rounded-lg gap-2 max-h-[400px] overflow-y-auto ">
          {taskList.map((task, index) => (

            <li className={`group p-3 bg-slate-600 rounded-lg flex flex-row justify-between hover:opacity-90 ${task.isDone ? 'opacity-80' : ''} `}
              key={task.id}
              onClick={(e) => statusHandler(e, index)}>
              <p
                className={`${task.isDone && 'line-through'}`}>
                {task.title}</p>
              <button
                className="bg-red-500 px-2 rounded hidden group-hover:block hover:opacity-60"
                onClick={(e) => statusHandler(e, index)}
              >Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App