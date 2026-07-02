import React, { useContext } from 'react'
import userContext from './userContext';
function Nestedchild() {
    const user = useContext(userContext)
    return (
        <div>
            <h3>nested child</h3>
            <h2>name: {user}</h2>
        </div>
    )
    
}

export default Nestedchild;