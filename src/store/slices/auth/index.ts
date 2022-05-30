import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthenticationService from '../../../services/authentication.service'
export interface AuthState {
  isLoggedIn: boolean;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: AuthState = {
  isLoggedIn: !!localStorage.getItem("accessToken"),
  status: 'idle',
};

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (userData:any) => {
    const {username, password} = userData
    const response = await AuthenticationService.login(username, password);
    return !!response.access_token;
  }
);

export const signupThunk = createAsyncThunk(
  'auth/signup',
  async (userData:any) => {
    const {username, password} = userData
    const response = await AuthenticationService.signup(username, password);
    return !!response.access_token;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.status = 'idle';
        state.isLoggedIn = action.payload;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(signupThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signupThunk.fulfilled, (state, action) => {
        state.status = 'idle';
        state.isLoggedIn = action.payload;
      })
      .addCase(signupThunk.rejected, (state) => {
        state.status = 'failed';
      });
  },
});


export default authSlice.reducer;
