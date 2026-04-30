import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
    const [name, setName]= useState("")
    const[email, setEmail]= useState("")
    const[message, setMessage]= useState("")
    const navigate=useNavigate()

    const handleSubmit=(data)=>{
        event.preventDefault()
        console.log(data)
        if(!email.endsWith("krmu.edu.in")){
            alert("Invalid email")
            return 
        }
        console.log(name)
        console.log(email)
        console.log(message)
        navigate("/")

    }
  return (
    <div>
      <form onSubmit={()=>{handleSubmit("SAmple Data")}}>
        <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>{setName(e.target.value)}} />
        <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <textarea placeholder="Enter your message" value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
        <input className='bg-blue-800 text-white' type="submit" value="Send" />
      </form>
    </div>
  )
}

export default Contact