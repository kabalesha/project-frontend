import { createAsyncThunk } from '@reduxjs/toolkit';
import { logIn, signIn, signUp } from '../../api/ApiAuthUser';
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
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const data = await signIn(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
