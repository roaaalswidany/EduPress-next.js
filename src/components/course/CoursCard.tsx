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
      <div className="relative h-48 w-full">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-gray-600 mb-2">by {course.author}</p>
        
        <h3 className="text-xl font-bold text-gray-900 mb-4">{course.title}</h3>
        
        <div className="flex justify-between items-center mb-4 text-sm text-orange-500">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className='text-black'>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className='text-black'>{course.students} students</span>
          </div>
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <div>
            { course.price > 0 ? (
              <>
              
                                <span className="text-sm text-gray-500 line-through mr-2">${course.originalPrice.toFixed(2)}</span>
                    <span className="text-lg font-bold text-green-600">Free</span>
              </>
            ):
            (
              <span>${course.price.toFixed(2)}</span>
            )
            }
            </div>
            <Link 
              href={`/courses/${course.id}`} 
              className=" py-2 px-4 rounded-md transition duration-300 font-bold"
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