'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '@/store/slices/coursesSlice';
import { setCurrentPage, setTotalPages } from '@/store/slices/uiSlice';
import { AppDispatch, RootState } from '@/lib/types/index';
import CourseList from '@/components/course/CoursList';
import Pagination from '@/components/ui/Pagination';

export default function CoursesPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { allCourses, status } = useSelector((state: RootState) => state.courses);
  const { currentPage, itemsPerPage } = useSelector((state: RootState) => state.ui);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCourses());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (allCourses.length > 0) {
      const totalPages = Math.ceil(allCourses.length / itemsPerPage);
      dispatch(setTotalPages(totalPages));
    }
  }, [allCourses, itemsPerPage, dispatch]);

  const indexOfLastCourse = currentPage * itemsPerPage;
  const indexOfFirstCourse = indexOfLastCourse - itemsPerPage;
  const currentCourses = allCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">All courses</h1>
        {status === 'loading' ? (
          <p>Loading courses...</p>
        ) : (
          <>
            <CourseList courses={currentCourses} />
            <Pagination 
              itemsPerPage={itemsPerPage} 
              totalItems={allCourses.length} 
              currentPage={currentPage}
              paginate={paginate}
            />
          </>
        )}
      </div>
    </div>
  );
}