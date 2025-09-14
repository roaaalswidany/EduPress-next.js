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
import { BookOpen, Clock, FileText, Users } from 'lucide-react';

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
        return <Curriculum chapters={[]} />;
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
      <div className="bg-gray-50 px-6 py-3 text-sm text-gray-600">
        Homepage {'>'} Course {'>'} {course.title}
      </div>
      <div className="relative bg-black px-6 pt-4 pb-10 md:pt-16 md:pb-16">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 text-white mb-8 lg:mb-0 lg:pr-10">
              <div className="flex items-center text-white mb-2">
                <span className="text-lg font-medium border border-gray-600 bg-gray-600 p-2">Photography</span>
                <span className="mx-2 text-gray-600">by</span>
                <span className="text-lg font-semibold">DeterminedPoinas</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                The Ultimate Guide To The Best WordPress LMS Plugin
              </h1>
              
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center">
                  <Clock size={20} className="text-orange-400 mr-2" />
                  <span>2 Weeks</span>
                </div>
                <div className="flex items-center">
                  <Users size={20} className="text-orange-400 mr-2" />
                  <span>156 Students</span>
                </div>
                <div className="flex items-center">
                  <BookOpen size={20} className="text-orange-400 mr-2" />
                  <span>20 Lessons</span>
                </div>
                <div className="flex items-center">
                  <FileText size={20} className="text-orange-400 mr-2" />
                  <span>3 Quizzes</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
                <div className="relative w-full h-48 md:h-56 rounded-lg overflow-hidden mb-6">
                  {course.image ? (
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-r from-blue-800 to-purple-700 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">No Image Available</span>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    {course.price > 0 ? (
                      <>
                        {course.originalPrice > course.price && (
                          <span className="text-lg text-gray-500 line-through">
                            ${course.originalPrice.toFixed(2)}
                          </span>
                        )}
                        <span className="text-2xl font-bold text-orange-500">
                          ${course.price.toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span className="text-2xl font-bold text-green-600">Free</span>
                    )}
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="cursor-pointer bg-orange-500 hover:bg-orange-600 border-0 text-white"
                  >
                    {course.price > 0 ? 'Start Now' : 'Start Learning'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-8/12">
              <CourseTabs activeTab={activeTab} setActiveTab={setActiveTab} />
              
              <div className="p-6">
                {renderTabContent()}
              </div>
            </div>
            <div className="w-full lg:w-4/12 border-l border-gray-200 p-6">
              <div className="sticky top-6">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;