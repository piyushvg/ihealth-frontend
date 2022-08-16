import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducer/commonSlice';

export const store = configureStore({
  reducer: {
    common: reducer,
  },
});