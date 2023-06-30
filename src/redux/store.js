import { configureStore } from '@reduxjs/toolkit';
import continentSliceReducer from './continent/continentDetailsSlice';
import countriesSlice from './countries/countriesSlice';

const store = configureStore({
  reducer: {
    continent: continentSliceReducer,
    country: countriesSlice,
  },
});

export default store;
