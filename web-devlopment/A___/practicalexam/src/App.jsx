// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'



// import React,{useState} from 'react'
// function App() {

//       const [count, setCount] = useState(0)
//       const increment = () => {
//         setCount (count+1)
//       }
//       const decrement = ()=> {
//         setCount (count-1)
//       }
      
//       const reset =()=>{
//         setCount(0)
//       }
//       return (
//         <div>
//           <h1>CounterApplication</h1>
//           <h2> Count : {count}</h2>
//           <button onClick={increment} > Increment </button>
//           <button onClick={decrement}> Decrement</button>
//           <button onClick={reset}> Reset</button>
//         </div>

        
//       )
// }
    
// export default App;


// import React,{ createContext, useState } from 'react'
// import Child from './Child'
// import userContext from './userContext'

// function app (){
//   const name="dev"
//   return (
//     <div>
//       <h1>Contextapi</h1>
//       <userContext.Provider value={name}>
//         <Child/>
//       </userContext.Provider>
//     </div>
//   )
// }

// export default app






import React,{ createContext, useState } from 'react'
import Child from './Child'
import userContext from './userContext'

function App() {
      const name="dev"
      const [count, setCount] = useState(0)
      const increment = () => {
        setCount (count+1)
      }
      const decrement = ()=> {
        setCount (count-1)
      }
      
      const reset =()=>{
        setCount(0)
      }
      return (
        <div>
          <h1>CounterApplication</h1>
          <h2> Count : {count}</h2>
          <button onClick={increment} > Increment </button>
          <button onClick={decrement}> Decrement</button>
          <button onClick={reset}> Reset</button>
          <h1>ContextApi</h1>
          <userContext.Provider value={name}>
            <Child/>
          </userContext.Provider>
        </div>

        
      )
}
    
export default App;