import { configureStore, createSlice } from '@reduxjs/toolkit';

const data = createSlice({
  name: 'dataReducer',
  initialState: { page: '', offset: 0, timezone: '' },
  reducers: {
    add: (state, action) => {
      state.page = action.payload;
    },
    setOffset: (state, action) => {
      state.offset = action.payload;
    },
    // setUtc: (state, action) => {
    //   state.utc = action.payload;
    // },
    setTimeZone: (state, action) => {
      state.timezone = action.payload;
    },
  },
});

export const { add, setOffset, setTimeZone } = data.actions;

export default configureStore({ reducer: data.reducer });
