// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'




// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App


//----parent and child component----


// import Child from './Child'
// import React from 'react'

// export default function App() {
//   const name = "nitesh"
//   return (
//     <div>{name}</div>
//   )
// }


//---counter application---

// import React, { useState } from 'react'
// function App() {
//   const [count, setCount] = useState(0)
//   const increment = () => {
//     setCount(count + 1)
//   }
//   const decrement = () => {
//     setCount(count - 1)
//   }
//   const reset = () => {
//     setCount(0)
//   }

//   return (
//     <div>
//       <h1>Counter App</h1>
//       <h2>Count : {count}</h2>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default App


//------fetch api------

// import React, { useState, useEffect } from 'react'

// function App() {
//   const [data, setData] = useState(null)
  
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//       .then(response => response.json())
//       .then(json => setData(json))
//   }, []) 

//   return (
//     <div>
//       <h1>user details</h1>
//       {users.map((user)=>
//         <div key={user.id}>
//           <h2>{user.name}</h2>
//           <p>{user.email}</p>
//         </div>
//       )}
//     </div>
//   )

// }

// export default App



//-----context api-----

// import React, { createContext, useState } from 'react'
// import Child from './Child'
// import usercontext from './usercontext'

// function App() {
//   const name = "nitesh"
//   return (
//     <div>
//       <h1>Context API</h1>
//       <usercontext.Provider value={name}>
//         <Child />
//       </usercontext.Provider>
//     </div>
//   )
// }

// export default App


//-----form handling-----

// import React, { useState } from "react";

// function App() {
//     const [name, setName] = useState("");
//     return (
//         <div>
//             <h1>Form Handling</h1>
//             <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//             />
//             <p>Name: {name}</p>
//         </div>
//     )
// }

// export default App
    


// ----rotuing ---

// import React from "react";
// import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";


// function App() {
//     return (
//         <BrowserRouter>
//             <nav>
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/about">About</Link></li>
                
//             </nav>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//             </Routes>
//         </BrowserRouter>
//     )
// }

// export default App


//----Like button---

import React, { useState } from "react";

function App() {
    const [liked, setLiked] = useState(false);
    
    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <div>
            <h1>Like Button</h1>
            <button onClick={toggleLike}>
                {liked ? "❤️" : "💔"}
            </button>
        </div>
    );
}

export default App