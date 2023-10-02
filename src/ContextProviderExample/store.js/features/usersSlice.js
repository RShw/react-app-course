import { createSlice } from "@reduxjs/toolkit";

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

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state) => {
            return [
                ...state,
                ...[{
                  firstName: "placeholder_firstName",
                  lastName: "placeholder_lastName",
                }]
              ]
        },
        deleteUser: (state, action) => {
            const tempState = [...state]
            tempState.splice(action.payload.index, 1)
            return tempState
        }
    },
})

export const {addUser, deleteUser} = usersSlice.actions

export default usersSlice.reducer