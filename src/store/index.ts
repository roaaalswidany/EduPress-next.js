import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './slices/coursesSlice';
import authReducer from './slices/authSlice';
import uiReducer from './slices/uiSlice';
import { RootState } from '../lib/types/index';

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    auth: authReducer,
    ui: uiReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;