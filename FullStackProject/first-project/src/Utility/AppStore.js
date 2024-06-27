import {configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice.js"

const store = configureStore({
    reducer:{
        cart : CartReducer
    }
})

export default store ;