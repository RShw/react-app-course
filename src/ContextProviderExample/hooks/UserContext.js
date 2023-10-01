import React, {createContext, useState} from "react";

export const UserContext = createContext()

function UserProvider({children}) {

  const initialState = [
    {
      firstName: "Triphon",
      lastName: "Solerite",
    },
    {
      firstName: "Prune",
      lastName: "Uquil"
    }
  ]

  const [users, setUsers] = useState(initialState)

  const addUser = () => {
    setUsers([
      ...users,
      ...[{
        firstName: "placeholder_firstName",
        lastName: "placeholder_lastName",
      }]
    ])
  }

  const deleteUser = (index) => {
    const tempUser = [...users]
    tempUser.splice(index, 1)
    setUsers([...tempUser])
  }

  return (
    <UserContext.Provider value={{users, addUser, deleteUser}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
