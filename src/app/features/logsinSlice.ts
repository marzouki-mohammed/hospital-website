import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface logState  {
    value: boolean;
}

const initialState: logState = { value: false };

export const logsinSlice = createSlice({
    name: "LogIn",
    initialState,
    reducers: {
        loged: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload; // ✅ Correction ici
        }
    }
});

// Exporte les actions et le reducer
export const { loged } = logsinSlice.actions;
export default logsinSlice.reducer;


