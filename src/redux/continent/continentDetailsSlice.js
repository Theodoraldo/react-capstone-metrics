import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getContinentDetails = createAsyncThunk('continent/getContinentDetails',
  async (id) => {
    const response = await axios.get(`https://restcountries.com/v3.1/region/${id}`);
    return response.data;
  });

const continentSlice = createSlice({
  name: 'continent',
  initialState: {
    continent: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [getContinentDetails.pending]: (state) => {
      state.isLoading = true;
    },
    [getContinentDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.continent = action.payload;
    },
    [getContinentDetails.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default continentSlice.reducer;
