import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: true,
  reducers: {
    modalShow: (state, action) => (state = action.payload),
  },
});
export const { modalShow } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
