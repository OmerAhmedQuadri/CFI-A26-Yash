import React, { useState } from 'react'
import './App.css'
// const [count, setCount] = useState(0)

const App = () => {
  const [count, setCount] = useState(0)
  function clickHandler() {
    setCount(count + 1)
  }
  return (
    <div className='container'>
      <h1>counter: {count}</h1>
      <div style={{
        display:'flex',
        padding:'15px',
        gap:'10px',
      }}>
        <button onClick={(clickHandler)}>Increment</button>
        <button onClick={() => setCount(Math.max(0, count - 1))}>Decrement</button>
      </div>
    </div>
  )
}

export default App