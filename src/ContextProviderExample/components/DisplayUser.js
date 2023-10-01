import React, {useContext} from 'react'
import { UserContext } from '../hooks/UserContext'
import { styles } from './styles'

function DisplayUser() {

    const {users, addUser, deleteUser} = useContext(UserContext)

    return (
        <div>
            {users.map((user, index) => (
                <>
                    <p style={styles.text}>{user.lastName} {user.firstName}</p>
                    <button onClick={addUser}>Add User</button>
                    <button onClick={() => deleteUser(index)}>Remove User</button>
                </>
            ))}
        </div>
    )
}

export default DisplayUser
