import { RootState } from '@/store';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { AppDispatch, store } from '@/store';
import { ReactNode } from "react";

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: number;
  type: 'video' | 'text' | 'quiz';
}

export interface Chapter {
  id: string;
  title: string;
  description?: string
  lessons: Lesson[];
  totalLessons: number
  totalDuration: number
}

export interface Course {
  instructor: unknown;
  level: ReactNode;
  quizzesCount: ReactNode;
  lessonsCount: ReactNode;
  enrolledCount: ReactNode;
  name: string
  avatar: string
  thumbnail: string;
  id: string;
  title: string;
  category: string;
  author: string;
  duration: number;
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
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export type RootState = ReturnType<typeof store.getState>
