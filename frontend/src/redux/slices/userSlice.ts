import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  isLoggedIn: boolean;
  userNickname: string | null;
  userPassword: string | number | null;
  currentWeight: number | null;
  desiredWeight: number | null;
  targetDate: string | null;
}

const initialState: UserState = {
  isLoggedIn: false,
  userNickname: null,
  userPassword: null,
  currentWeight: null,
  desiredWeight: null,
  targetDate: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action: PayloadAction<UserState>) {
      state.isLoggedIn = true;
      state.userNickname = action.payload.userNickname;
      state.currentWeight = action.payload.currentWeight;
      state.desiredWeight = action.payload.desiredWeight;
      state.targetDate = action.payload.targetDate;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userNickname = null;
      state.currentWeight = null;
      state.desiredWeight = null;
      state.targetDate = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
