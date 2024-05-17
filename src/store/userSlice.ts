import { UserInfo } from "@/entity";
import { createSlice } from "@reduxjs/toolkit";

const initalValue: UserInfo = {
  name: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: initalValue,
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
