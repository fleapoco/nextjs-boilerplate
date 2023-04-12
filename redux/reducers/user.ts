import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { IUserReduxState } from '@interface/index';

const initialState: IUserReduxState = {
  email: '',
  _id: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: IUserReduxState, action: PayloadAction<IUserReduxState>) => {
      state = action.payload;
      return { ...action.payload };
    },
    setEmail: (state: { email: string }, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setUserId: (state: { _id: string }, action: PayloadAction<string>) => {
      state._id = action.payload;
    },
    clearState: () => initialState
  }
});

export const { setEmail, setUserId, clearState, setUser } = userSlice.actions;
export const getUserState = (state: RootState) => state.user;

export default userSlice.reducer;
