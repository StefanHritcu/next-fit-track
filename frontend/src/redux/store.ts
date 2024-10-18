import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./../redux/slices/userSlice";
import weightReducer from "./../redux/slices/weightSlice.ts";
import caloriesReducer from "./../redux/slices/caloriesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    weight: weightReducer,
    calories: caloriesReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
