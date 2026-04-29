import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Sample from './component/Sample'
import Navbar from './component/Navbar'
import HomePage from './component/HomePage'
import Contact from './component/Contact'
import { UserContext } from './UserContext'

function App() {
  const [menu, setMenu] = useState("Sports")
  const [abc, setAbc] = useState("Entertainment")
  const name = "John Doe"
  

  return (
   <UserContext.Provider value={name}>
    <div className="App">
      <Navbar list={menu}/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/sample' element={<Sample/>}/>
        <Route path='/search' element={<h1>Search Page</h1>}/>
      </Routes>
    </div>
   </UserContext.Provider>
  )
}

export default App
