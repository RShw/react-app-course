import React from 'react'
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, deleteUser } from '../store.js/features/usersSlice'

function DisplayUser() {
    
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()

    return (
        <div>
            {users.map((user, index) => (
                <>
                    <p style={styles.text}>{user.lastName} {user.firstName}</p>
                    <button onClick={() => dispatch(addUser())}>Add User</button>
                    <button onClick={() => dispatch(deleteUser(index))}>Remove User</button>
                </>
            ))}
        </div>
    )
}

export default DisplayUser
