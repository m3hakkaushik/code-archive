import React from 'react'

function HomePage() {
  const loggedin=false;
//   if(loggedin){
//     return (
//         <button>Logout</button>
//     )
//   }else{
//     return (
//         <button>Login</button>
//     )
//   }

return(
    loggedin?<button>Logout</button>: <button>Login</button>
)
}

export default HomePage
