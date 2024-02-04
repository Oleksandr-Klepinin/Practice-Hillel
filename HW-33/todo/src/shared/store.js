import {configureStore} from "@reduxjs/toolkit";
import todoSlice from '../engine/todo/redux/slice.js'
import sagaMiddleware from "./middleware/saga.js";
import {rootSaga} from "./rootSaga.js";

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
    },
    middleware: () => [
        sagaMiddleware
    ]
})

sagaMiddleware.run(rootSaga);