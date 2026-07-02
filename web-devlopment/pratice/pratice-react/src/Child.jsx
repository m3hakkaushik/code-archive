//parent and child component

// import React from "react";

// export default function Child({name}) {
//     return (
//         {name}
//     )
// }


//context api

import React from "react";
import Grandchild from "./grandchild";

function Child() {
    return (
        <div>
            <h1>Child Component</h1>
            <Grandchild />
        </div>
    )
}

export default Child