import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import globalReducer from './reducers/global';
import { NODE_ENV } from '../utils';

export const store = configureStore({
  reducer: { user: userReducer, global: globalReducer },
  devTools: NODE_ENV !== 'production'
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
