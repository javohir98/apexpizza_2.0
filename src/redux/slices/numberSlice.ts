import { createSlice } from "@reduxjs/toolkit";

export const numberSlice = createSlice({
    name:"number",
    initialState:{
        infNumber:""
    },
    reducers:{
        postNumber:(state,action) => {

        }
    }
})

export const {postNumber} = numberSlice.actions;
export default numberSlice.reducer;