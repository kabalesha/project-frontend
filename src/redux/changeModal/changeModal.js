import { createSlice } from '@reduxjs/toolkit';

const changeModalSlice = createSlice({
  name: 'modalName',
  initialState: false,
  reducers: {
    modalName: (state, action) => (state = action.payload),
  },
});
export const { modalName } = changeModalSlice.actions;
export const modalNameReducer = changeModalSlice.reducer;
