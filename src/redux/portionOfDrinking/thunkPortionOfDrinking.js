import { createAsyncThunk } from '@reduxjs/toolkit';

// export const getProfileThunk = createAsyncThunk('get/profile', () =>
//   getProfile()
// );
export const thunkPortionOfDrinking = createAsyncThunk(
  'portion/getPortion',
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const data = await getPortionOfWater(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
