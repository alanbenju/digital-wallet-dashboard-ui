import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import walletService from '../../../services/wallet.service';
import AuthenticationService from '../../../services/authentication.service'
import { IWallet, IWalletFilters } from '../../../common/interfaces';

export interface WalletState {
  wallets: Array<IWallet>;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: WalletState = {
  wallets: [],
  status: 'idle',
};

export const fetchWalletsThunk = createAsyncThunk(
  'wallets/fetchWallets',
  async (filters?: IWalletFilters) => {
    try{
      return await walletService.fetchWallets(filters);
    }
    catch(err){
      console.log(err)
      AuthenticationService.logout()  // TODO: not handling auth errors so if the fetch fails i assume it's because the token is expired
      return err
    }
  }
);

export const toggleFavoriteThunk = createAsyncThunk(
  'wallets/toggleFavorite',
  async (id: number) => {
    try{
      return await walletService.toggleFavorite(id);
    }
    catch(err){
      console.log(err)
      return err
    }
  }
);

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWalletsThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWalletsThunk.fulfilled, (state, action) => {
        state.status = 'idle';
        state.wallets = action.payload;
      })
      .addCase(fetchWalletsThunk.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(toggleFavoriteThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(toggleFavoriteThunk.fulfilled, (state, action) => {
        state.status = 'idle';
      })
      .addCase(toggleFavoriteThunk.rejected, (state) => {
        state.status = 'failed';
      })
}});


export default walletSlice.reducer;
