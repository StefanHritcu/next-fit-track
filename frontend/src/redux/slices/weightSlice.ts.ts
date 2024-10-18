// store/slices/weightSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WeightState {
  data: number[];
}

const initialState: WeightState = {
  data: [80, 78.5, 79, 77, 76.5, 77, 75.5, 74, 73.5, 74.5, 73, 72.5], // Dati di esempio
};

const weightSlice = createSlice({
  name: "weight",
  initialState,
  reducers: {
    updateWeight(state, action: PayloadAction<number[]>) {
      state.data = action.payload;
    },
  },
});

export const { updateWeight } = weightSlice.actions;
export default weightSlice.reducer;
