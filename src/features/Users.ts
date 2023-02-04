import { createSlice } from "@reduxjs/toolkit";
import { IPosts } from "../components/Dashboard/RegisterPost/types";

export const userSlice = createSlice({
    name: "users",
    initialState: {
        value: [] as IPosts[],
    },
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload)
        },
        
        deleteUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id)
        },

        updateUserName: (state, action) => {
            state.value.map((user) => {
                if (user.id === action.payload.id) {
                    user.title = action.payload.title
                    user.content = action.payload.content
                }
            })
        }
    }
});

export const { addUser, deleteUser, updateUserName } = userSlice.actions;
export default userSlice.reducer;
