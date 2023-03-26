import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IUserReduxState } from "../../types";

const initialState: IUserReduxState = {
  email: "",
  _id: ""
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state: { email: string }, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setUserId: (state: { _id: string }, action: PayloadAction<string>) => {
      state._id = action.payload;
    }
  }
});

export const { setEmail, setUserId } = userSlice.actions;
export const getUserState = (state: RootState) => state.user;

export default userSlice.reducer;
