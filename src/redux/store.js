import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./slice/apiSlices/apiSlice";

const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    keepUnusedDataFor: 120,
    trace: true,
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([apiSlice.middleware]),
    preloadedState: {}
})

export { store }