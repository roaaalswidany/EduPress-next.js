import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UIState } from '../../lib/types/index';

const initialState: UIState = {
  currentPage: 1,
  itemsPerPage: 6,
  totalPages: 0,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
  },
});

export const { setCurrentPage, setTotalPages } = uiSlice.actions;

export default uiSlice.reducer;