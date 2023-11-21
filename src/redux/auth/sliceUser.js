import { createSlice } from '@reduxjs/toolkit';
import {
  signUpThunk,
  thunkLogOut,
  thunkRefresh,
  thunkSignIn,
} from './thunkUser';

const initialState = {
  access_token: '',
  isLoading: false,
  error: '',
  profile: null,
  isLoggedIn: false,
  isRefreshing: false,
};
const handleFulfilledSignUp = (state, action) => {
  console.log('action', action.payload);
  state.isLoading = false;
};
const handleFulfilledUser = (state, action) => {
  state.isLoading = false;
  state.access_token = action.payload.token;
  state.profile = action.payload.user;
  state.isLoggedIn = true;
};
const handleFulfilledRefresh = (state, action) => {
  console.log('action', action.payload);
  if (!action.payload) {
    localStorage.setItem('token', '');
    state.access_token = '';
    state.isLoading = false;
    state.error = '';
    state.profile = null;
  } else {
    return;
  }
};
const handleFulfilledLogOut = (state, action) => {
  state.access_token = '';
  state.isLoading = false;
  state.error = '';
  state.profile = null;
  localStorage.setItem('root', '');
};

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};
const handleRejected = (state, { error, payload }) => {
  state.isLoading = false;
  state.error = payload ?? error.message;
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // logOut: state => {
    //   state.access_token = '';
    //   state.isLoading = false;
    //   state.error = '';
    //   state.profile = null;
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.fulfilled, handleFulfilledSignUp)
      .addCase(thunkSignIn.fulfilled, handleFulfilledUser)
      .addCase(thunkRefresh.fulfilled, handleFulfilledRefresh)
      .addCase(thunkLogOut.fulfilled, handleFulfilledLogOut)
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});
export const authReducer = authSlice.reducer;
// export const { logOut } = authSlice.actions;
export const selectAccessToken = state => state.auth.access_token;
