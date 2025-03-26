import { configureStore } from "@reduxjs/toolkit";
import { navigationSlice } from "./features/navigationSlice";
import { logsinSlice } from "./features/logsinSlice";


export const store = configureStore({
    reducer : {
        [navigationSlice.name] : navigationSlice.reducer ,
        [logsinSlice.name] : logsinSlice.reducer
    }
});



// ✅ Définition des types globaux pour TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;