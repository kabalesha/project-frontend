import { createSlice } from '@reduxjs/toolkit';

import { thunkPortionAddDrinking } from './thunkPortionOfDrinking';

const initialState = {
  access_token: '',
  isLoading: false,
  error: '',
  portionArr: null,
};
const handleFulfilled = (state, action) => {
  state.isLoading = false;
  // state = [...state, action.payload];
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
const portionOfDrinkingSlice = createSlice({
  name: 'portion',
  initialState,
  // initialState: [],
  // reducers: {
  //   add: (state, action) => [...state, action.payload],

  //   del: (state, action) => state.filter((el, idx) => idx !== action.payload),

  extraReducers: builder => {
    builder
      .addCase(thunkPortionAddDrinking.fulfilled, handleFulfilled)
      //   .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});
export const portionDrink = portionOfDrinkingSlice.reducer;
// export const { add, del, drink } = portionOfDrinkingSlice.actions;
