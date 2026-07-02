// import React, { useState } from 'react'
// import { Routes, Route } from 'react-router-dom'
// import './App.css'
// import Sample from './component/Sample'
// import Navbar from './component/Navbar'
// import HomePage from './component/HomePage'
// import Contact from './component/Contact'
// import { UserContext } from './UserContext'
// import User from './component/User'
// import Product from './component/Product'


// function App() {
//   const [menu, setMenu] = useState("Sports")
//   const [abc, setAbc] = useState("Entertainment")
//   const name = "John Doe"
  

//   return (
//    <UserContext.Provider value={name}>
//     <div className="App">
//       <Navbar list={menu}/>
//       <Routes>
//         <Route path='/' element={<HomePage/>}/>
//         <Route path='/contact' element={<Contact/>}/>
//         <Route path='/sample' element={<Sample/>}/>
//         <Route path='/search' element={<h1>Search Page</h1>}/>
//         <Route path='/product' element={<h1>Product Page</h1>}/>
//       </Routes>
//     </div>
//    </UserContext.Provider>
//   )
// }

// export default App




import React, { useState } from 'react'
import './App.css'
import Sample from './component/Sample'
import Navbar from './component/Navbar'
import HomePage from './component/HomePage'
import Contact from './component/Contact'
import { Route, Routes } from 'react-router-dom'
import Profile from './component/Profile'
import { UserContext } from './UserContext'
import Search from './component/Search'
import Product from './component/Product'

function App() {
  const [menu, setMenu] = useState("Sports")
  const [abc, setAbc] = useState("Entertainment")
  const name="Bob"

  return (
    <>

      <UserContext.Provider value={name}>
          <Routes>
            <Route path="/" element={<><HomePage menu={menu} /></>} >
            
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/sample" element={<><Sample /></>} />
            <Route path="/profile/:username" element={<><Profile/></>} />
            <Route path="/search" element={<><Search/></>} />
            <Route path="/product" element={<><Product/></>} />
        </Routes>
      </UserContext.Provider>
      
    </>
  )
}

export default App