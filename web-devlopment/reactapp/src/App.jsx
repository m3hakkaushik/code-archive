import React, { useState } from 'react'
import './App.css'
import Sample from './component/Sample'
import Navbar from './component/Navbar'
import HomePage from './component/HomePage'

function App() {
  const [menu, setMenu] = useState("Sports")
  const [abc, setAbc] = useState("Entertainment")

  return (
    <>
      <HomePage/>
      <Navbar list={menu} />
      <Navbar list={abc} />
      <Sample />
    </>
  )
}

export default App
