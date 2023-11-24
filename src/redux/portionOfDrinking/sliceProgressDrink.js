import { createSlice } from '@reduxjs/toolkit';

const sliceProgressDrink = createSlice({
  name: 'progress',
  initialState: null,
  reducers: {
    drink: (state, action) => console.log('state', state),
  },
});
export const progressDrink = sliceProgressDrink.reducer;
export const { drink } = sliceProgressDrink.actions;
