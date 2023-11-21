import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

const sliceProgressDrink = createSlice({
  name: 'progress',
  initialState: null,
  reducers: {
    drink: (state, action) => console.log('state', state),
  },
});
export const progressDrink = sliceProgressDrink.reducer;
export const { drink } = sliceProgressDrink.actions;
