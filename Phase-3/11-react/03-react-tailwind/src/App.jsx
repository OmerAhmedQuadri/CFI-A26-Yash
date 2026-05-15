import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div className='flex justify-center items-center flex-col h-screen gap-10 bg-blue-300'>
      <h1 className={`font-bold text-3xl ${count>=0 ? 'text-green-600' : 'text-red-600'}`}>Counter: {count}</h1>
      <div className='flex flex-row gap-3'>
        <button
          className='p-2 rounded-2xl bg-green-300 hover:bg-green-400'
          onClick={() => setCount(count + 1)}>Increment</button>
        <button
          className='p-2 rounded-2xl bg-red-300 hover:bg-red-400'
          onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  )
}

export default App