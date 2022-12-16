import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ImageInterface } from '../../hooks/interface/ImageInterface';

const initialState: ImageInterface[] = [];

const ImagesSlice = createSlice({
  name: 'images',
  initialState: {
    images: initialState,
  },
  reducers: {
    setImage(state, action: PayloadAction<ImageInterface[]>) {
      state.images = action.payload;
    },
  },
});

export default ImagesSlice.reducer;
export const { setImage } = ImagesSlice.actions;
