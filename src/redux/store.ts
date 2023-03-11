import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from "./slices/apiSlice";
import counterSlice from "./slices/counterSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        counter: counterSlice
    },
    devTools: process.env.REACT_APP_NODE_ENV !== 'production',
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})