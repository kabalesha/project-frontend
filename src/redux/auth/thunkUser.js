import { createAsyncThunk } from '@reduxjs/toolkit';
import { logOut, refresh, signIn, signUp } from '../../api/ApiAuthUser';

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
      console.log('data', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const thunkRefresh = createAsyncThunk(
  'authUser/current',
  async (body, { rejectWithValue }) => {
    try {
      const data = await refresh(body);
      console.log('second', '444');
      return data;
    } catch (error) {
      console.log('first', '555');
      return rejectWithValue('');
    }
  }
);
export const thunkLogOut = createAsyncThunk(
  'auth/logout',
  async rejectWithValue => {
    try {
      return logOut();
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
