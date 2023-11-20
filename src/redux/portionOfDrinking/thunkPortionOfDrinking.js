import { createAsyncThunk } from '@reduxjs/toolkit';

// export const getProfileThunk = createAsyncThunk('get/profile', () =>
//   getProfile()
// );
export const thunkPortionOfDrinking = createAsyncThunk(
  'portion/getPortionOfWater',
  async (body, { rejectWithValue, dispatch }) => {
    // try {
    //   const data = await portonWater(body);
    //   return data;
    // } catch (error) {
    //   return rejectWithValue(error.response.data.message);
    // }
  }
);
