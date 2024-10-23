import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {}
})

type TAppDispatch = typeof store.dispatch;
type TRootState = ReturnType<typeof store.getState>;

export type {TAppDispatch, TRootState};
export {store};