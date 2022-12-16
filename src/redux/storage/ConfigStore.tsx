import { configureStore } from '@reduxjs/toolkit';
import ClientReducer from '../slices/ClientSlice';
import AccountReducer from '../slices/AccountSlice';
import MovementsReducer from '../slices/MovementsSlice';
import ImageReducer from '../slices/ImageSlice';
import TokenReducer from '../slices/TokenSlice';

export const ConfigStorage = configureStore({
  reducer: {
    client: ClientReducer,
    account: AccountReducer,
    movements: MovementsReducer,
    image: ImageReducer,
    token: TokenReducer,
  },
});

export type AppDispatch = typeof ConfigStorage.dispatch;
export type RootState = ReturnType<typeof ConfigStorage.getState>;
