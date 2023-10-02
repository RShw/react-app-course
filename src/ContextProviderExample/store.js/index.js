import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../store.js/features/usersSlice"

export const store = configureStore({
    reducer: {
        users: usersReducer
    }
})