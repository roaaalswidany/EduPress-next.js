'use client';

import React from 'react';
import { Course } from '@/lib/types/index';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface InstructorProps {
  course: Course;
}

const Instructor: React.FC<InstructorProps> = ({ course }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">About the Instructor</h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4">
          <div className="w-32 h-32 rounded-full overflow-hidden mx-auto md:mx-0">
            <Image
              src={course.instructor?.avatar || '/default-avatar.jpg'}
              alt={course.instructor?.name || 'Instructor'}
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="w-full md:w-3/4">
          <h3 className="text-2xl font-bold mb-2">{course.instructor?.name || 'John Doe'}</h3>
          <p className="text-gray-600 mb-4">{course.instructor?.title || 'WordPress Expert'}</p>
          
          <p className="text-gray-700 mb-6">
            LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online. You can create a course curriculum with lessons & quizzes included which is managed with an easy-to-use interface for users.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-400">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-600">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-700">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;