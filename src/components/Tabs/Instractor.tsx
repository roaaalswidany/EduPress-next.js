'use client';

import React from 'react';
import { Course } from '@/lib/types/index';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Users, BookOpen, Youtube } from 'lucide-react';
import LeaveComment from '../LeaveComment/LeaveComment';

interface InstructorProps {
  course: Course;
}

interface Instructor {
  avatar?: string;
  name?: string;
  title?: string;
}

const Instructor: React.FC<InstructorProps> = ({ course }) => {
  const instructor: Instructor = course.instructor || {};
  
  const avatarSrc = instructor.avatar || '/assets/images/frame.png';
  const instructorName = instructor.name || 'John Doe';
  const instructorTitle = instructor.title || 'WordPress Expert';

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">About the Instructor</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4 flex justify-center md:justify-start">
          <div className="w-[180px] h-[180px] overflow-hidden">
            <Image
              src={avatarSrc}
              alt={instructorName}
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        
        <div className="w-full md:w-3/4">
          <h3 className="text-xl font-bold mb-2 text-gray-800">{instructorName}</h3>
          <p className="text-orange-600 font-medium mb-4">{instructorTitle}</p>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online. You can create a course curriculum with lessons & quizzes included which is managed with an easy-to-use interface for users.
          </p>
          
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-center">
              <span className="w-8 h-8 flex items-center justify-center">
                <Users size={18} className="text-orange-600 mr-2" />
              </span>
              <span className="text-gray-700">156 Students</span>
            </div>
            <div className="flex items-center">
              <span className="w-8 h-8 flex items-center justify-center">
                <BookOpen size={18} className="text-orange-600 mr-2" />
              </span>
              <span className="text-gray-700">20 Lessons</span>
            </div>
          </div>
          
          <div className="flex space-x-4 items-center">
            <span className="text-gray-500">Follow:</span>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors cursor-pointer">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors cursor-pointer">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors cursor-pointer">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors cursor-pointer">
              <Youtube size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333
1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <LeaveComment/>
      </div>
    </div>
  );
};

export default Instructor;