import React, { createContext, useState } from 'react'
export const countercontext=createContext(null)
function Context(props) {
    const [data, setdata] = useState(0)
    const add=()=>{
        setdata((data)=>data+1)
    }
      const sub=()=>{
       if(data>0){
        setdata((data)=>data-1)
       }
    }
  return (
    <countercontext.Provider value={{data,add,sub}}>
        {props.children}
    </countercontext.Provider>
  )
}
export default Context