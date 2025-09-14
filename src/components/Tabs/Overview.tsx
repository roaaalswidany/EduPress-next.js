'use client';

import React from 'react';
import { Course } from '@/lib/types/index';
import LeaveComment from '@/components/LeaveComment/LeaveComment';

interface CourseOverviewProps {
  course: Course;
}

const Overview: React.FC<CourseOverviewProps> = ({ }) => {
  return (
    <div className="max-w-4xl mx-auto">

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online. You can create a course curriculum with lessons & quizzes included which is managed with an easy-to-use interface for users. Having this WordPress LMS Plugin, now you have a chance to quickly and easily create education, online school, online-course websites with no coding knowledge required.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          LearnPress is free and always will be, but it is still a premium high-quality WordPress Plugin that definitely helps you with making money from your WordPress Based LMS. Just try and see how amazing it is. LearnPress WordPress Online Course plugin is lightweight and super powerful with lots of Add-Ons to empower its core system. How to use WPML Add-on for LearnPress? No comments yet! You be the first to comment.
        </p>
      </div>
      <LeaveComment />
    </div>
  );
};

export default Overview;