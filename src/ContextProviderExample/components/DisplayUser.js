import React, {useContext} from 'react'
import { UserContext } from '../hooks/UserContext'
import { styles } from './styles'

function DisplayUser() {

    const users = useContext(UserContext)

    return (
        <div>
            {users.map(user => (
                <p style={styles.text}>{user.lastName} {user.firstName}</p>
            ))}
        </div>
    )
}

export default DisplayUser
