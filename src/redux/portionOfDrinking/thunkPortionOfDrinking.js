import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiAddWater } from '../../api/ApiWater';

// export const getProfileThunk = createAsyncThunk('get/profile', () =>
//   getProfile()
// );
export const thunkPortionOfDrinking =
  createAsyncThunk();
  // 'portion/getPortion',
  // async (body, { rejectWithValue, dispatch }) => {
  //   try {
  //     // const data = await getPortionOfWater(body);
  //     // return data;
  //   } catch (error) {
  //     return rejectWithValue(error.response.data.message);
  //   }
  // }
export const thunkPortionAddDrinking = createAsyncThunk(
  'portion/postPortion',
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const data = await apiAddWater(body);
      console.log('bodyThunk', body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
