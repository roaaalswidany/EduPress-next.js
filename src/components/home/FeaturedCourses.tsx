import React from 'react';
import { Course } from '@/lib/types/index';
import CourseCard from '../course/CoursCard';
import Link from 'next/link';

interface FeaturedCoursesProps {
  courses: Course[];
}

const FeaturedCourses: React.FC<FeaturedCoursesProps> = ({ courses }) => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-2">Featured Courses</h2>
            <p className="text-gray-600">Explore our Popular Courses</p>
          </div>
          <Link href="/courses"  className="px-5 py-2 border rounded-full text-gray-700 hover:bg-gray-100 transition cursor-pointer">
            All Courses
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;