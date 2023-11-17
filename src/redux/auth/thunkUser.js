import { createAsyncThunk } from '@reduxjs/toolkit';
import { refresh, signIn, signUp } from '../../api/ApiAuthUser';
// export const getProfileThunk = createAsyncThunk('get/profile', () =>
//   getProfile()
// );
export const signUpThunk = createAsyncThunk('auth/signUp', (body, thunkApi) => {
  try {
    return signUp(body);
  } catch (e) {
    return thunkApi.rejectWithValue(e.message);
  }
});

export const thunkSignIn = createAsyncThunk(
  'authUser/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signIn(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const thunkRefresh = createAsyncThunk(
  'authUser/current',
  async rejectWithValue => {
    try {
      const data = await refresh();
      return data;
    } catch (error) {
      return rejectWithValue('');
    }
  }
);
