import { createSlice } from '@reduxjs/toolkit';

import { thunkPortionAddDrinking } from './thunkPortionOfDrinking';

const initialState = {
  portion: [],
  isLoading: false,
  error: '',
};
const handleFulfilledSignUp = (state, action) => {
  console.log('action', action.payload);
  console.log('state', state);
  state.isLoading = false;
  state.portion = [...state.portion, action.payload];
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

  extraReducers: builder => {
    builder
      .addCase(thunkPortionAddDrinking.fulfilled, handleFulfilledSignUp)

      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});
export const portionDrink = portionOfDrinkingSlice.reducer;
// export const { add, del, drink } = portionOfDrinkingSlice.actions;
