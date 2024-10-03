import { createSlice } from '@reduxjs/toolkit';

const LoginInfo = createSlice({
  name: 'login',
  initialState: {
    LoginInformation: []
  },
  reducers: {
    takeLogindata: (state, action) => {
      console.log('action values are', action);
      state.LoginInformation.push(action.payload);
    },
    LogoutData: (state, action) => {
      state.LoginInformation = []
    }
  }
});

export const { takeLogindata, LogoutData } = LoginInfo.actions;
export default LoginInfo.reducer;
