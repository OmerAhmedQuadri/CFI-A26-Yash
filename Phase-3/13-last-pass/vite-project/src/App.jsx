// import React from 'react'

// const App = () => {
//   return (
//     <div className=' flex flex-col justify-center items-center h-screen border-2 border-black rounded-xl bg-slate-500 '>
//       <div className='border-2 border-black rounded-xl px-20 py-6 gap -2'>
//         <input type="text"
//           className='outline-0 rounded p-2' />
//         <button>regenerate pass</button>
//         <button >Copy Password</button>
//       </div>
//       <div className='flex'>
//         <p>Password Length</p>
//         <p >5</p>
//         <input type="range" min={5} max={50} />
//       </div>
//       <div className='flex '>
//         <p>Characters used</p>
//         <input type="checkbox" name="Uppercase" /><p>Uppercase</p>
//         <input type="checkbox" name="Lowercase" /><p>Lowercase</p>
//         <input type="checkbox" name="Numbers" /><p>Numbers</p>
//         <input type="checkbox" name="Symbols" /><p>Symbols</p>
//       </div>
//     </div>
//   )
// }

// export default App

import React, { useCallback, useEffect, useState } from 'react'

const App = () => {
  const [passwordLength, setpasswordLength] = useState(8)
  const [upperCaseAllowed, setupperCaseAllowed] = useState(true)
  const [lowerCaseAllowed, setlowerCaseAllowed] = useState(true)
  const [numbersAllowed, setnumbersAllowed] = useState(true)
  const [symbolsAllowed, setsymbolsAllowed] = useState(true)
  const [password, setpassword] = useState('')
  const [copied, setcopied] = useState(false)

  const copyPassword = () => {
    navigator.clipboard.writeText(password)
    setcopied(true)
    setTimeout(() => {
      setcopied(false)
    }, 2000);
  }

  const generatePassword = useCallback(() => {
    let str = ''
    if (lowerCaseAllowed) str += 'abcdefghijklmnopqrstuvwxyz'
    if (symbolsAllowed) str += '!@#$%^&*()_+'
    if (upperCaseAllowed) str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (numbersAllowed) str += '0123456789'
    let password = ''
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * str.length)
      password += str[randomIndex]
    }
    setpassword(password)
  }, [upperCaseAllowed, lowerCaseAllowed, symbolsAllowed, numbersAllowed, passwordLength],
  )


  useEffect(() => {
    generatePassword()
  }, [numbersAllowed, symbolsAllowed, lowerCaseAllowed, upperCaseAllowed, passwordLength, generatePassword])

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-700 p-4">

      <div className="w-full max-w-2xl bg-slate-800 rounded-2xl shadow-2xl p-8 text-white space-y-6">

        {/* Input + Buttons */}
        <div className="flex flex-col md:flex-row gap-3 items-center">

          <input type="text" placeholder="Generated Password"
            readOnly
            value={password}
            className="flex-1 w-full text-white rounded-xl px-4 py-3 outline-none border-2 border-transparent focus:border-cyan-400" />

          <button onClick={generatePassword}
            className="bg-cyan-500 hover:bg-cyan-600 transition px-5 py-3 rounded-xl font-semibold">
            <img
              src="https://img.icons8.com/?size=100&id=60634&format=png&color=000000"
              alt="home"
              className="w-auto h-6"
            />
          </button>

          <button
            onClick={copyPassword}
            className={`${!copied ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-950'} transition px-5 py-3 rounded-xl font-semibold `}>
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Password Length */}
        <div className="flex items-center gap-4">

          <p className="font-medium whitespace-nowrap">
            Password Length : {passwordLength}
          </p>

          <input type="range" value={passwordLength} onChange={(event) => setpasswordLength(Number(event.target.value))} min={5} max={50} className="w-full accent-cyan-400 cursor-pointer" />
        </div>

        {/* Options */}
        <div className="flex flex-wrap gap-6 items-center">

          <p className="font-medium">
            Characters Used:
          </p>

          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox"
              onChange={() => setupperCaseAllowed(prev => !prev)}
              checked={upperCaseAllowed} />
            <p>Uppercase</p>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox"
              onChange={() => setlowerCaseAllowed(prev => !prev)}
              checked={lowerCaseAllowed} />
            <p>Lowercase</p>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox"
              onChange={() => setnumbersAllowed(prev => !prev)}
              checked={numbersAllowed} />
            <p>Numbers</p>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox"
              onChange={() => setsymbolsAllowed(prev => !prev)}
              checked={symbolsAllowed} />
            <p>Symbols</p>
          </label>

        </div>

      </div>

    </div>
  )
}

export default App