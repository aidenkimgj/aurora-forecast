import { configureStore, createSlice } from '@reduxjs/toolkit';

const title = createSlice({
  name: 'titleReducer',
  initialState: { page: '' },
  reducers: {
    add: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { add } = title.actions;

export default configureStore({ reducer: title.reducer });
