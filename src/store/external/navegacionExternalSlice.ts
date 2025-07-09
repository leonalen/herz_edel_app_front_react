import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: string | null;
}

const initialState: CounterState = { value: 'inicio'};

const navegacionExternalSlice = createSlice({
  name: "navegacion",
  initialState,
  reducers: {
    addNavegacion: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    clearNavegacion: (state) => {
      state.value = null;
    },
  },
});

export const { addNavegacion, clearNavegacion } = navegacionExternalSlice.actions;
export default navegacionExternalSlice.reducer;
