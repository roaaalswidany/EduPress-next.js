import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, AuthState, LoginCredentials, RegisterData } from '../../lib/types/index';

const initialState: AuthState = {
  users: [],
  currentUser: null,
  isAuthenticated: false,
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerStart: (state) => {
      state.status = 'loading';
    },
    registerSuccess: (state, action: PayloadAction<User>) => {
      state.status = 'succeeded';
      state.users.push(action.payload);
    },
    registerFailure: (state, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    loginStart: (state) => {
      state.status = 'loading';
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.status = 'succeeded';
      state.isAuthenticated = true;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
    },
  },
});

export const { 
  registerStart, 
  registerSuccess, 
  registerFailure,
  loginStart,
  loginSuccess,
  loginFailure,
  logout
} = authSlice.actions;

export const registerUser = (userData: RegisterData) => async (dispatch: AppDispatch) => {
  try {
    dispatch(registerStart());
    const { confirmPassword, ...userDataWithoutConfirm } = userData;
    const newUser: User = {
      id: Date.now().toString(),
      ...userDataWithoutConfirm,
    };
    dispatch(registerSuccess(newUser));
    return { success: true };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    dispatch(registerFailure(errorMessage));
    return { success: false, error: errorMessage };
  }
};

export const loginUser = (credentials: LoginCredentials) => async (dispatch: AppDispatch, getState: () => RootState) => {
  try {
    dispatch(loginStart());
    const { users } = getState().auth;
    
    const user = users.find(
      u => (u.email === credentials.email || u.username === credentials.username) && 
           u.password === credentials.password
    );
    
    if (user) {
      dispatch(loginSuccess(user));
      return { success: true };
    } else {
      const error = 'Email / Username or password is incorrect';
      dispatch(loginFailure(error));
      return { success: false, error };
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    dispatch(loginFailure(errorMessage));
    return { success: false, error: errorMessage };
  }
};

export default authSlice.reducer;