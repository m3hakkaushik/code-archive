import React, { useContext } from "react";
import usercontext from "./usercontext";

function Grandchild() {
    const user = useContext(usercontext);

    return (
        <div>
            <h1>Grandchild Component</h1>
            <p>Name: {user}</p>
        </div>
    );
}

export default Grandchild;