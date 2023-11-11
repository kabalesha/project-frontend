import { createAsyncThunk } from '@reduxjs/toolkit';
import { logIn } from '../../api/ApiAuthUser';
// export const getProfileThunk = createAsyncThunk('get/profile', () =>
//   getProfile()
// );
export const thunkLogin = createAsyncThunk(
  'authUser/login',
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const data = await logIn(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
