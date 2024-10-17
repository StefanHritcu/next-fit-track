import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  isLoggedIn: boolean;
  userNickname: string | null;
  userPassword: string | number | null;
  currentWeight: number | null;
  desiredWeight: number | null;
  targetDate: string | null;
  moreDataAdded: boolean;
}

const initialState: UserState = {
  isLoggedIn: false,
  userNickname: null,
  userPassword: null,
  currentWeight: null,
  desiredWeight: null,
  targetDate: null,
  moreDataAdded: false,
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
      state.moreDataAdded = false;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userNickname = null;
      state.currentWeight = null;
      state.desiredWeight = null;
      state.targetDate = null;
      state.moreDataAdded = false;
    },
    addMoreData(state) {
      if (state.isLoggedIn) {
        state.moreDataAdded = true;
      }
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
