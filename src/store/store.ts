import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import wallets from './slices/wallets';
import auth from './slices/auth';
import rates from './slices/rates';


export const store = configureStore({
  reducer: {
    wallets,
    auth,
    rates
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
