import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'count',
    initialState: 1,
    reducers: {
        inc: state => {
            state += 1;
        },
        dec: state => {
            state -= 1;
        }
    }
})


export default counterSlice.reducer

export const {
    inc,
    dec
} = counterSlice.actions

export const counterDataSelector = state => state.count
