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

function Sample() {
  const [count, setCount]=useState(0)

  const increament  = () => {
    setCount(count+1)
  }

  const decreament  = () => {
    setCount(count-1)
  }
  return (
    <div>
      <h1>This is a sample component </h1>
      <h2>{count}</h2>
      <button onClick={decreament}>Decreament</button>
      <button onClick={increament}>increament</button>
    </div>
  )
}

export default Sample
