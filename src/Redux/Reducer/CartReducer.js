import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartValue : []
}

const cartReducer = createSlice({
    name: "cartReducer",
    initialState,
    reducers: {
        incrementCart: (state, action) => {
            state.cartValue.push(action.payload)
        }
    }

})

export const {incrementCart} = cartReducer.actions
export default cartReducer.reducer