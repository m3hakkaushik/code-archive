import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Sample from './component/Sample'
import Navbar from './component/Navbar'
import HomePage from './component/HomePage'
import Contact from './component/Contact'

function App() {
  const [menu, setMenu] = useState("Sports")
  const [abc, setAbc] = useState("Entertainment")

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="navbar" element={<Navbar />} />
        <Route path="sample" element={<Sample />} />
      </Routes>
    </>
  )
}

export default App
