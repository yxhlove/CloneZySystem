import { UserInfo } from "@/entity";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initalValue: UserInfo = {
  name: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: initalValue,
    isLogin: false,
  },
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
  },
});

export const { setUserInfo, setIsLogin } = userSlice.actions;

export default userSlice.reducer;
