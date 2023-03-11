import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from "./slices/apiSlice";
import counterSlice from "./slices/counterSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        counter: counterSlice
    },
    devTools: import.meta.env.MODE !== 'production',
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})