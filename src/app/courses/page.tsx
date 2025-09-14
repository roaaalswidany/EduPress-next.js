'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '@/store/slices/coursesSlice';
import { setCurrentPage, setTotalPages } from '@/store/slices/uiSlice';
import { AppDispatch, RootState } from '@/lib/types/index';
import CourseList from '@/components/course/CoursList';
import Pagination from '@/components/ui/Pagination';
import { LayoutGrid, List } from 'lucide-react'; 

export default function CoursesPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { allCourses, status } = useSelector((state: RootState) => state.courses);
  const { currentPage, itemsPerPage } = useSelector((state: RootState) => state.ui);

  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

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

  const filteredCourses = allCourses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastCourse = currentPage * itemsPerPage;
  const indexOfFirstCourse = indexOfLastCourse - itemsPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <h1 className="text-3xl font-bold">All Courses</h1>

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center w-full md:w-auto">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 w-full sm:w-64"
            />
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg border ${
                  viewMode === 'grid' ? 'bg-orange-500 text-white' : 'bg-white text-gray-700'
                }`}
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg border ${
                  viewMode === 'list' ? 'bg-orange-500 text-white' : 'bg-white text-gray-700'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {status === 'loading' ? (
          <p>Loading courses...</p>
        ) : (
          <>
            <CourseList courses={currentCourses} viewMode={viewMode} />
            <Pagination 
              itemsPerPage={itemsPerPage} 
              totalItems={filteredCourses.length} 
              currentPage={currentPage}
              paginate={paginate}
            />
          </>
        )}
      </div>
    </div>
  );
}