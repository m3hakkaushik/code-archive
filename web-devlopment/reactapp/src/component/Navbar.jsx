import React from 'react'
function Navbar(props) {
  // props.list="Cricket"
  // console.log(props.list)
  return (
    <div>
      <h2> This is a NavBar</h2>
      <ul>
        <li>{props.list}</li>
      </ul>
      <h3> Logo</h3>
    </div>
  )
}

export default Navbar
