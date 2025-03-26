import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NavigationState {
    value: string;
}

const initialState: NavigationState = { value: "Home" };

export const navigationSlice = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        Navigate: (state, action: PayloadAction<string>) => {
            state.value = action.payload; // ✅ Correction ici
        }
    }
});

// Exporte les actions et le reducer
export const { Navigate } = navigationSlice.actions;
export default navigationSlice.reducer;



