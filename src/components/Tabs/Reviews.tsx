'use client';

import React from 'react';
import { Course } from '@/lib/types/index';
import { Star } from 'lucide-react';

interface ReviewsProps {
  course: Course;
}

const Reviews: React.FC<ReviewsProps> = ({ course }) => {
  const ratings = [
    { stars: 5, percentage: 80 },
    { stars: 4, percentage: 15 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 }
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Student Reviews</h2>
      
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <div className="text-4xl font-bold text-orange-500 mb-2">4.0</div>
          <div className="flex justify-center mb-2">
            {[1, 2, 3, 4].map((star) => (
              <Star key={star} size={20} className="fill-current text-orange-500" />
            ))}
            <Star size={20} className="text-orange-500" />
          </div>
          <div className="text-sm text-gray-600">based on 146,951 ratings</div>
        </div>
        
        <div className="flex-1">
          {ratings.map((rating) => (
            <div key={rating.stars} className="flex items-center mb-2">
              <div className="w-12 text-sm text-gray-600">{rating.stars} stars</div>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-orange-500" 
                  style={{ width: `${rating.percentage}%` }}
                ></div>
              </div>
              <div className="w-12 text-right text-sm text-gray-600">{rating.percentage}%</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-6">
        {/* Sample Review */}
        <div className="border-b border-gray-200 pb-6">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-3">
              <span className="text-sm font-medium">LH</span>
            </div>
            <div>
              <h4 className="font-medium">Laura Hipster</h4>
              <div className="flex items-center text-sm text-gray-500">
                <span>October 03, 2022</span>
              </div>
            </div>
          </div>
          <p className="text-gray-700">
            Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. 
            Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faacibus bibendum augue id cras purus. 
            At eget euismod cursus non. Molexite dignissim sed volupar leugiat vel.
          </p>
          <button className="mt-3 text-sm text-orange-500 font-medium">Reply</button>
        </div>
        
        {/* Add more reviews here */}
      </div>
    </div>
  );
};

export default Reviews;