'use client';

import React from 'react';
import { Course } from '@/lib/types/index';
import Link from 'next/link';
import Image from 'next/image';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
      <div className="h-48 bg-gradient-to-r flex items-center justify-center">
        <Image
          src={course.image}
          width={500}
          height={192}
          className="text-white font-medium" alt={''}        />
      </div>
      
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
            {course.category}
          </span>
          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-sm font-medium text-gray-700">{course.rating}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
        <p className="text-gray-600 mb-4">by {course.author}</p>
        
        <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
          <div className="flex items-center">
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>{course.students} students</span>
          </div>
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              {course.price > 0 ? (
                <>
                  <span className="text-lg font-bold text-gray-900">${course.price.toFixed(2)}</span>
                  <span className="text-sm text-gray-500 line-through ml-2">${course.originalPrice.toFixed(2)}</span>
                </>
              ) : (
                <span className="text-lg font-bold text-green-600">Free</span>
              )}
            </div>
            <Link 
              href={`/courses/${course.id}`} 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;