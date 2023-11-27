import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addPortionOfWater,
  apiDeleteWater,
  apiRemoveWater,
  getPortionOfWaterToday,
  getWaterForMonth,
} from '../../api/ApiPortionWater';

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

export const thunkPortionOfDrinkingToday = createAsyncThunk(
  'portion/getPortion',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const data = await getPortionOfWaterToday();
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
      const { data } = await addPortionOfWater(body);

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const thunkPortionDeleteWater = createAsyncThunk(
  'portion/delPortion',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await apiDeleteWater(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const thunkPortionRemoveWater = createAsyncThunk(
  'portion/removePortion',
  async (portionData, { rejectWithValue, dispatch }) => {
    try {
      const data = await apiRemoveWater(portionData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
