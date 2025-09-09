export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'text' | 'quiz';
}

export interface Chapter {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  category: string;
  author: string;
  duration: string;
  students: number;
  lessons: number;
  quizzes: number;
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
  description: string;
  featured: boolean;
  image: string;
  chapters: Chapter[];
}

export interface CoursesState {
  allCourses: Course[];
  featuredCourses: Course[];
  currentCourse: Course | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export interface AuthState {
  users: User[];
  currentUser: User | null;
  isAuthenticated: boolean;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export interface UIState {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
}

export interface RootState {
  courses: CoursesState;
  auth: AuthState;
  ui: UIState;
}

export interface AppDispatch {
  dispatch: AppDispatch;
}

export interface LoginCredentials {
  email?: string;
  username?: string;
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}