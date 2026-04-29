import React, { PureComponent } from 'react'
import { UserContext } from '../UserContext'

function User() {
    const {name} = UserContext()
  return (

    <div>
        <h2> say hiiiiiii {name}</h2>
    </div>
    )
    }

export default User
