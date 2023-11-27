import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addPortionOfWater,
  getPortionOfWater,
  getWaterForMonth,
} from '../../api/ApiPortionWater';

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
export const thunkPortionAddDrinking = createAsyncThunk(
  'portion/postPortion',
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const data = await addPortionOfWater(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const thunkPortionGetForMonth = createAsyncThunk(
  'portion/getPortionForMonth',
  async (body, { rejectWithValue }) => {
    try {
      const data = await getWaterForMonth(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
