import { useState } from 'react'

const App = () => {
  const [text, setText] = useState('')
  const changeHandler = (e) => {
    setText(e.target.value)
  }
  return (
    <div className='flex justify-center items-center h-screen flex-col'>
      <input value={text}
        onChange={changeHandler}
        className='border border-amber-300 rounded p-2 mb-3 transition duration-200 ease-in focus:outline-amber-500'
        type="text" placeholder='Enter your text' />
      <div className='flex gap-10 '>
        <button onClick={() => setText('')}
          className='p-2 border border-amber-300 rounded bg-amber-400'>Clear</button>
        <button onClick={() => alert(text)}
          className='p-2 border border-amber-300 rounded bg-amber-400'>Submit</button>
      </div>
    </div>
  )
}

export default App