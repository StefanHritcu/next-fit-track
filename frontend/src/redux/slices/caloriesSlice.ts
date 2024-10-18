import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CaloriesState {
  data: number[];
}

const initialCaloriesState: CaloriesState = {
  data: [
    2500, 2400, 2450, 2300, 2200, 2250, 2100, 2050, 2000, 1950, 1900, 1850,
  ],
};

const caloriesSlice = createSlice({
  name: "calories",
  initialState: initialCaloriesState,
  reducers: {
    updateCalories(state, action: PayloadAction<number[]>) {
      state.data = action.payload;
    },
  },
});

export const { updateCalories } = caloriesSlice.actions;
export default caloriesSlice.reducer;
