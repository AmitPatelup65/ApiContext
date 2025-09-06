import React, { createContext, useContext, useState } from 'react'
import A1 from './Components/A1'
import { countercontext } from './Context/Context'
function App() {
const {data,add,sub}=useContext(countercontext)
  return (
    <div className='flex justify-center h-screen items-center'>
     <button onClick={add} className='bg-blue-500 border-1 px-3 py-3 rounded-lg active:scale-90'> +</button>
     <h1 className='mx-3'>{data}</h1>
     <button onClick={sub} className='bg-red-500 border-1 px-4 py-3 rounded-lg active:scale-90'> -</button>
    </div>
  )
}

export default App