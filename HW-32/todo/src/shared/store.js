import {configureStore} from "@reduxjs/toolkit";
import todoSlice from '../engine/todo/slice.js'

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
    }
})