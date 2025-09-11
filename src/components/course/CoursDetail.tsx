'use client';

import React, { useState } from 'react';
import { Course } from '@/lib/types/index';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import CourseTabs from './CourseTaps';
import Overview from '@/components/Tabs/Overview';
import Curriculum from '@/components/Tabs/Curriculum';
import Instructor from '@/components/Tabs/Instractor';
import Faqs from '@/components/Tabs/Faqs';
import Reviews from '@/components/Tabs/Reviews';
import { BookOpen, Clock, FileText, Star, Users, Play, ChevronDown, ChevronUp } from 'lucide-react';

interface CourseDetailProps {
  course: Course;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ course }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview course={course} />;
      case 'curriculum':
        return <Curriculum course={course} />;
      case 'instructor':
        return <Instructor course={course} />;
      case 'faqs':
        return <Faqs course={course} />;
      case 'reviews':
        return <Reviews course={course} />;
      default:
        return <Overview course={course} />;
    }
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 px-6 py-3 text-sm text-gray-600">
        Homepage {'>'} Course {'>'} {course.title}
      </div>

      {/* Course Header with Image */}
      <div className="relative w-full h-64 md:h-96 bg-gray-200">
        <Image
          src={course.image || '/default-course.jpg'}
          alt={course.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
            {course.title}
          </h1>
        </div>
      </div>

      {/* Course Info Stats */}
      <div className="px-6 py-4 bg-white border-b border-gray-200">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <div className="flex items-center">
            <Clock size={18} className="text-gray-600 mr-2" />
            <span className="text-sm md:text-base">{course.duration}</span>
          </div>
          <div className="flex items-center">
            <Users size={18} className="text-gray-600 mr-2" />
            <span className="text-sm md:text-base">{course.enrolledCount} Students</span>
          </div>
          <div className="flex items-center">
            <BookOpen size={18} className="text-gray-600 mr-2" />
            <span className="text-sm md:text-base">{course.lessonsCount} Lessons</span>
          </div>
          <div className="flex items-center">
            <FileText size={18} className="text-gray-600 mr-2" />
            <span className="text-sm md:text-base">{course.quizzesCount} Quizzes</span>
          </div>
          <div className="flex items-center">
            <span className="text-sm md:text-base bg-green-100 text-green-800 px-2 py-1 rounded-full">
              {course.level}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Content */}
        <div className="w-full lg:w-8/12">
          {/* Tabs Navigation */}
          <CourseTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          
          {/* Tab Content */}
          <div className="p-6">
            {renderTabContent()}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-4/12 border-l border-gray-200 p-6">
          <div className="sticky top-6">
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">

{course.price > 0 ? (
                <>
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold text-gray-900">${course.price.toFixed(2)}</span>
                    {course.originalPrice > course.price && (
                      <span className="text-lg text-gray-500 line-through ml-2">
                        ${course.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </>
              ) : (
                <span className="text-2xl font-bold text-green-600">Free</span>
              )}
              
              <Button size="lg" className="w-full mb-4">
                {course.price > 0 ? 'Enroll Now' : 'Start Learning'}
              </Button>
              
              <div className="text-center text-sm text-gray-600">
                <p>30-Day Money-Back Guarantee</p>
              </div>
            </div>

            {/* Course Features */}
            <div className="mt-6 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-semibold text-lg mb-4">This course includes:</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Play size={16} className="text-green-600 mr-2" />
                  <span>{course.lessonsCount} on-demand videos</span>
                </li>
                <li className="flex items-center">
                  <FileText size={16} className="text-green-600 mr-2" />
                  <span>{course.quizzesCount} quizzes</span>
                </li>
                <li className="flex items-center">
                  <Clock size={16} className="text-green-600 mr-2" />
                  <span>Full lifetime access</span>
                </li>
                <li className="flex items-center">
                  <BookOpen size={16} className="text-green-600 mr-2" />
                  <span>Certificate of completion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;