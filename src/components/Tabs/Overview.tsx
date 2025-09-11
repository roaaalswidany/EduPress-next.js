'use client';

import React from 'react';
import { Course } from '@/lib/types/index';

interface CourseOverviewProps {
  course: Course;
}

const Overview: React.FC<CourseOverviewProps> = ({ course }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Course Description</h2>
      <p className="text-gray-700 mb-6">{course.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">What You'll Learn</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>Create and manage online courses</li>
            <li>Set up quizzes and assignments</li>
            <li>Manage student progress</li>
            <li>Monetize your courses</li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Requirements</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>Basic WordPress knowledge</li>
            <li>Web hosting with WordPress installed</li>
            <li>Desire to create educational content</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Overview;