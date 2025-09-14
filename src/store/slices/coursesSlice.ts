import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, Course, CoursesState } from '../../lib/types/index';
import { mockCourses } from '@/lib/data/mockData';

const initialState: CoursesState = {
  allCourses: [],
  featuredCourses: [],
  currentCourse: null,
  status: 'idle',
  error: null,
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    fetchCoursesStart: (state) => {
      state.status = 'loading';
    },
    fetchCoursesSuccess: (state, action: PayloadAction<Course[]>) => {
      state.status = 'succeeded';
      state.allCourses = action.payload;
      state.featuredCourses = action.payload.slice(0, 3);
    },
    fetchCoursesFailure: (state, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    setCurrentCourse: (state, action: PayloadAction<string>) => {
      state.currentCourse = state.allCourses.find(course => course.id === action.payload) || null;
    },
  },
});

export const { fetchCoursesStart, fetchCoursesSuccess, fetchCoursesFailure, setCurrentCourse } = coursesSlice.actions;

export const fetchCourses = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchCoursesStart());
    dispatch(fetchCoursesSuccess(mockCourses));
  } catch (error) {
    dispatch(fetchCoursesFailure(error instanceof Error ? error.message : 'Unknown error'));
  }
};

export default coursesSlice.reducer;