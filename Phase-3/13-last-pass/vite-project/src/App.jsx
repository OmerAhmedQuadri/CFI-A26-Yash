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
//         <span >5</span>
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

import React from 'react'

const App = () => {
return (
<div className="min-h-screen flex items-center justify-center bg-slate-700 p-4">

  <div className="w-full max-w-2xl bg-slate-800 rounded-2xl shadow-2xl p-8 text-white space-y-6">

    {/* Input + Buttons */}
    <div className="flex flex-col md:flex-row gap-3 items-center">

      <input type="text" placeholder="Generated Password"
        className="flex-1 w-full rounded-xl px-4 py-3 text-black outline-none border-2 border-transparent focus:border-cyan-400" />

      <button className="bg-cyan-500 hover:bg-cyan-600 transition px-5 py-3 rounded-xl font-semibold">
        Regenerate
      </button>

      <button className="bg-green-500 hover:bg-green-600 transition px-5 py-3 rounded-xl font-semibold">
        Copy
      </button>
    </div>

    {/* Password Length */}
    <div className="flex items-center gap-4">

      <p className="font-medium whitespace-nowrap">
        Password Length
      </p>

      <span className="bg-slate-600 px-3 py-1 rounded-lg">
        5
      </span>

      <input type="range" min={5} max={50} className="w-full accent-cyan-400 cursor-pointer" />
    </div>

    {/* Options */}
    <div className="flex flex-wrap gap-6 items-center">

      <p className="font-medium">
        Characters Used:
      </p>

      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" />
        <span>Uppercase</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" />
        <span>Lowercase</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" />
        <span>Numbers</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" />
        <span>Symbols</span>
      </label>

    </div>

  </div>

</div>
)
}

export default App