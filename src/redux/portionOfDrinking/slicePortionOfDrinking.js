import { createSlice } from '@reduxjs/toolkit';

import { thunkPortionAddDrinking } from './thunkPortionOfDrinking';

const initialState = {
  access_token: '',
  isLoading: false,
  error: '',
  profile: null,
  isLoggedIn: false,
  isRefreshing: false,
};
const handleFulfilledSignUp = (state, action) => {
  console.log('action', action.payload);
  state.isLoading = false;
};
const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};
const handleRejected = (state, { error, payload }) => {
  state.isLoading = false;
  state.error = payload ?? error.message;
};
const portionOfDrinkingSlice = createSlice({
  name: 'portion',
  initialState,
  reducers: {
    // logOut: state => {
    //   state.access_token = '';
    //   state.isLoading = false;
    //   state.error = '';
    //   state.profile = null;
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(thunkPortionAddDrinking.fulfilled, handleFulfilledSignUp)

      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});
export const portionDrink = portionOfDrinkingSlice.reducer;
// export const { add, del, drink } = portionOfDrinkingSlice.actions;
