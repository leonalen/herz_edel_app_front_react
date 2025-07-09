import { configureStore } from "@reduxjs/toolkit";
import navegacionExternalSlice from './external/navegacionExternalSlice';



export const store = configureStore({
    reducer: {
        navegacion: navegacionExternalSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;