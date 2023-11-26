import { createSlice } from '@reduxjs/toolkit';
import {
  addAvatarUserThunk,
  signUpThunk,
  thunkLogOut,
  thunkRefresh,
  thunkSignIn,
  updateUserThunk,
} from './thunkUser';

const initialState = {
  access_token: '',
  isLoading: false,
  error: '',
  profile: null,
  isLoggedIn: false,
  isRefreshing: false,
  norma: '1.5',
  avatar: false,
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
  if (!action.payload) {
    state.access_token = '';
    state.error = '';
    state.profile = null;

    // state.isLoggedIn = true;
  } else {
    return;
  }
};
const handleFulfilledUpdateUser = (state, action) => {
  state.isLoading = false;
  state.access_token = action.payload.token;

  state.profile = {
    ...state.profile,
    name: action.payload.name,
    gender: action.payload.gender,
    email: action.payload.email,
  };
  state.isLoggedIn = true;
};
const handleFulfilledUpdateAvatarUser = (state, action) => {
  // console.log('action', action.payload);
  state.isLoading = false;
  state.avatar = action.payload;

  // state.profile = {
  //   ...state.profile,
  //   avatar: action.payload.file,
  // };
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
    norma: (state, action) => (state.norma = action.payload),
    update: (state, action) => {
      state.profile = {
        ...state.profile,
        name: action.payload.name,
        gender: action.payload.gender,
        email: action.payload.email,
      };
    },
    addAvatar: (state, action) => {
      console.log('action', action.payload);
      state.avatar = action.payload;
    },
    //   logOut: state => {
    //     state.access_token = '';
    //     state.isLoading = false;
    //     state.error = '';
    //     state.profile = null;
    //   },
  },
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.fulfilled, handleFulfilledSignUp)
      .addCase(thunkSignIn.fulfilled, handleFulfilledUser)
      .addCase(thunkRefresh.fulfilled, handleFulfilledRefresh)
      .addCase(updateUserThunk.fulfilled, handleFulfilledUpdateUser)
      .addCase(addAvatarUserThunk.fulfilled, handleFulfilledUpdateAvatarUser)
      // .addCase(thunkLogOut.fulfilled, handleFulfilledLogOut)
      .addCase(thunkLogOut.fulfilled, () => {
        return { ...initialState };
      })
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});
export const authReducer = authSlice.reducer;
// export const { logOut } = authSlice.actions;
export const { update, addAvatar, norma } = authSlice.actions;
// export const selectAccessToken = state => state.auth.access_token;
