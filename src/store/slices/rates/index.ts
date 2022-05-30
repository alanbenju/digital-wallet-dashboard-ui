import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import rateService from '../../../services/rate.service';

export interface Rate {
  base: string;
  currency: string;
  value: number;
  id: number;
}

export interface RateState {
  rates: Array<Rate>;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: RateState = {
  rates: [],
  status: 'idle',
};

export const fetchRatesThunk = createAsyncThunk(
  'rates/fetchRates',
  async () => {
    const response = await rateService.fetchRates();
    return response;
  }
);

export const updateRateThunk = createAsyncThunk(
  'rates/updateRate',
  async (rate:any) => {
    const {id, value} = rate
    const response = await rateService.updateRate(id, value);
    return response;
  }
);

export const rateSlice = createSlice({
  name: 'rate',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRatesThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRatesThunk.fulfilled, (state, action) => {
        state.status = 'idle';
        state.rates = action.payload;
      })
      .addCase(fetchRatesThunk.rejected, (state) => {
        state.status = 'failed';
      })
  }
});


export default rateSlice.reducer;
