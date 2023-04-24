import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: { isLogegIn: false },
    
    reducers: {
        login(state) {
            state.isLogegIn = true;
            
        },
        logout(state) {
            state.isLogegIn = false;
            
        }
        
    }
});



export const userActions = userSlice.actions;

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
});