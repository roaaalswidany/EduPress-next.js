'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses, setCurrentCourse } from '@/store/slices/coursesSlice';
import { AppDispatch, RootState } from '@/lib/types/index';
import CourseDetail from '@/components/course/CoursDetail';

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params.id as string;
  const dispatch = useDispatch<AppDispatch>();
  const { allCourses, currentCourse, status } = useSelector((state: RootState) => state.courses);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCourses());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (allCourses.length > 0 && courseId) {
      dispatch(setCurrentCourse(courseId));
    }
  }, [allCourses, courseId, dispatch]);

  if (status === 'loading') {
    return <div className="container mx-auto px-4 py-8">The course is being loaded...</div>;
  }

  if (!currentCourse) {
    return <div className="container mx-auto px-4 py-8"> The course is not available </div>;
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <CourseDetail course={currentCourse} />
      </div>
    </div>
  );
}