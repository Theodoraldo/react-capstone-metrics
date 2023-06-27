import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCountryDetails = createAsyncThunk('continent/getCountryDetails',
  async (id) => {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${id}?fullText=true`);
    return response.data;
  });

const countriesSlice = createSlice({
  name: 'country',
  initialState: {
    country: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [getCountryDetails.pending]: (state) => {
      state.isLoading = true;
    },
    [getCountryDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.country = action.payload;
    },
    [getCountryDetails.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default countriesSlice.reducer;
