import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
  isLoading: false,
  notificationPanel: false,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    isLoadingHandler: (state, action) => {
      state.isLoading = action.payload;
    },
    loggedInHandler: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    userHandler: (state, action) => {
      state.user = action.payload;
    },
    logOutHandler: (state) => {
      localStorage.clear();
      state.isLoggedIn = false;
      state.user = null;
      state.isLoading = false;
    },
    notificationPanelHandler: (state, action) => {
      state.notificationPanel = action.payload;
    },
  },
});

export const {
  isLoadingHandler,
  loggedInHandler,
  userHandler,
  logOutHandler,
  notificationPanelHandler,
} = commonSlice.actions;

export default commonSlice.reducer;
