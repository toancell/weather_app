import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    city: "",
    country_code:"",
  },
  reducers: {
    searchData: (state,action) => {
      state.city = action.payload.city;
      state.country_code =action.payload.country_code;
      state.time = action.payload.time;
    },
  },
});

export const { searchData} = searchSlice.actions;
export default searchSlice.reducer;