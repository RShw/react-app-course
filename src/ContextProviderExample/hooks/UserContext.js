import React, {createContext} from "react";

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

  return (
    <UserContext.Provider value={initialState}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
