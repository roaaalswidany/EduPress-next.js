import React from 'react';
import { Course } from '@/lib/types/index';
import CourseCard from './CoursCard';

interface CourseListProps {
  courses: Course[];
  viewMode: 'grid' | 'list';
}

const CourseList: React.FC<CourseListProps> = ({ courses, viewMode }) => {
  if (viewMode === 'list') {
    return (
      <div className="space-y-6">
        {courses.map((course) => (
          <div key={course.id} className="w-full">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;