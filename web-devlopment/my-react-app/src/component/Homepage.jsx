import React from "react";

function Homepage() {
    const loggedIn = true ;
//     if (loggedIn){
//         return(
//             <button>Logout</button>
//         )
//     } else{
//         return (
//             <button>Login</button>
//         )
//     }
// }

return (loggedIn?<button>Logout</button>: <button>Login</button>)
}


export default Homepage


