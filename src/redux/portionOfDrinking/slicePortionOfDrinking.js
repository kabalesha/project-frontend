import { createSlice } from '@reduxjs/toolkit';

import {
  thunkPortionAddDrinking,
  thunkPortionDeleteDrinking,
} from './thunkPortionOfDrinking';

const initialState = {
  portion: [],
  isLoading: false,
  error: '',
};
const handleFulfilledAddWater = (state, action) => {
  console.log('action', action.payload);
  console.log('state', state);
  state.isLoading = false;
  state.portion = [...state.portion, action.payload];
};
const handleFulfilledDeleteWater = (state, action) => {
  console.log('action', action.payload);
  console.log('state', state);
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

  extraReducers: builder => {
    builder
      .addCase(thunkPortionAddDrinking.fulfilled, handleFulfilledAddWater)
      .addCase(thunkPortionDeleteDrinking.fulfilled, handleFulfilledDeleteWater)

      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});
export const portionDrink = portionOfDrinkingSlice.reducer;
// export const { add, del, drink } = portionOfDrinkingSlice.actions;