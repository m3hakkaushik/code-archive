import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [anime, setAnime] = useState("")

  return (
  <>
  <h1>frontend backend conctiom</h1>
  <h2> anime.length</h2>
    {
      anime.map((anime,key)=>(
        <div key={index}>
          <h3>{anime.name}</h3>
          <p>{anime.genre}</p>

        </div>
      ))
    }



  </>
  )
}

export default App
