import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addPortionOfWater,
  apiDeleteWater,
  getPortionOfWater,
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
  'portion/addPortion',
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const data = await addPortionOfWater(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const thunkPortionDeleteWater = createAsyncThunk(
  'portion/delPortion',
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const data = await apiDeleteWater(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
