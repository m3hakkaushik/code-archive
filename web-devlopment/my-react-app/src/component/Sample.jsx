import React, { Component } from 'react'

import{useState} from "react"

//  class Sample extends Component {
//     constructor(){
//         super()
//         this.state = {
//             count: 0
//         }
//     }
//     increment = () => {
//         this.setState({count: this.state.count + 1})
//     }
//   render() {
//     return (
//       <div>
//         <h1>This is a sample component</h1>
//         <h2>{this.state.count}</h2>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     )
//   }
// }

// export default Sample
// _______________________
// function Sample() {
//   const [count, setCount]=useState(0)

//   const increament  = () => {
//     setCount(count+1)
//   }

//   const decreament  = () => {
//     setCount(count-1)
//   }
//   return (
//     <div>
//       <h1>This is a sample component </h1>
//       <h2>{count}</h2>
//       <button onClick={decreament}>Decreament</button>
//       <button onClick={increament}>increament</button>
//     </div>
//   )
// }

// export default Sample


// 08/10/2026

// class Sample extends Component {
  
//   constructor(props){
//     super(props)
//     this.state = {
//       count: 0
//     }
//   }

//   componentDidMount(){
//     console.log("Component did mount")
//   }

//   shouldComponentUpdate(nextProps, nextState){

//     // if(nextState.count < 5){
//     //   return true
//     // }
//     // return false
//     console.log("Should component update")
//     return true

//   }

//   componentDidUpdate(){
//     console.log("Component did update")
//   }
  
//   componentWillUnmount
//   increment = () => {
//     this.setState({count: this.state.count + 1})
//   }

//   render() {
//     console.log("Render method")
//     return (
//       <div>
//         <h1>This is a sample component</h1>
//         <h2>{this.state.count}</h2>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     )
//   }
// }

// export default Sample

// ----------------------------------------------------------------


// import React from 'react'
// import { useState } from 'react'

function Sample() {
  // let count=0
  const [count, setCount]=useState(0)
  
  const increment = () => {
       setCount(count + 1)
    }

    const decrement = () => {
       setCount(count - 1)
    }
  return (
    <div>
      <h1>This is a sample component</h1>
      <h2>{count}</h2>
      <button style={{backgroundColor:"lightgreen",color:"grey", width:"100px", height:"30px"}} onClick={increment}>Increment</button>
      <button style={{backgroundColor:"black", color:"white", width:"100px", height:"30px"}} onClick={decrement}>decrement</button>
    </div>
  )
}

export default Sample




