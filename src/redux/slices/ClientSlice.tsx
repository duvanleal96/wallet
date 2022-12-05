import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClientInterface } from '../interface/ClientInterface';

const initialState: ClientInterface = {
  id: '',
  name: '',
  email: '',
  phone: '',
  photo: 'https://reactjs.org/logo-og.png',
  state: 1,
  createdAt: new Date(),
  updatedAt: null,
};

const ClientSlice = createSlice({
  name: 'client',
  initialState: {
    client: initialState,
  },
  reducers: {
    setClient(state, action: PayloadAction<ClientInterface>) {
      state.client = action.payload;
    },
  },
});

export default ClientSlice.reducer;
export const { setClient } = ClientSlice.actions;
