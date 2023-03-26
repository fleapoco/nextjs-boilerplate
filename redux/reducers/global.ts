import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IGlobalReduxState } from "@interface/index";

const initialState: IGlobalReduxState = {
  loading: false
};

export const globalSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state: { loading: boolean }, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    }
  }
});

export const { setLoading } = globalSlice.actions;
export const getUserState = (state: RootState) => state.user;

export default globalSlice.reducer;
