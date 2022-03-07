import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emailFieldActive: true,
  otpFieldActive: false,
  resetPasswordFieldActive: false,
};

const forgetPasswordSlice = createSlice({
  name: "forgetPassword",
  initialState: initialState,
  reducers: {
    emailNext: (state) => {
      state.emailFieldActive = false;
      state.otpFieldActive = true;
    },
    otpPrev:(state)=>{
        state.otpFieldActive = false;
        state.emailFieldActive=true;
        
    }
  },
});

export const {
  emailNext,
  otpPrev
} = forgetPasswordSlice.actions;

export default forgetPasswordSlice.reducer;
