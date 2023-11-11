import { createSlice } from '@reduxjs/toolkit';

import { thunkPortionOfDrinking } from './thunkPortionOfDrinking';

const initialState = {
  access_token: '',
  isLoading: false,
  error: '',
  profile: null,
};
const handleFulfilled = (state, action) => {
  state.isLoading = false;
  //   state.access_token = action.payload.access_token;
};

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};
const handleRejected = (state, { error, payload }) => {
  state.isLoading = false;
  state.error = payload ?? error.message;
};
const portionOfDrinking = createSlice({
  name: 'portion',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(thunkPortionOfDrinking.fulfilled, handleFulfilled)
      //   .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});
export const portionDrink = portionOfDrinking.reducer;
