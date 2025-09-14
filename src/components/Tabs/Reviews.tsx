'use client';

import React, { useState } from 'react';
import { Course } from '@/lib/types/index';
import { Star, ChevronLeft, ChevronRight, Reply } from 'lucide-react';
import LeaveComment from '../LeaveComment/LeaveComment';
import Image from 'next/image';

interface ReviewsProps {
  course: Course;
}

const Reviews: React.FC<ReviewsProps> = ({ course }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 3;

  const ratings = [
    { stars: 5, percentage: 90 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 }
  ];

  const reviews = [
    {
      id: 1,
      author: "Laura Hipster",
      date: "October 03, 2022",
      content: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faacibus bibendum augue id cras purus. At eget euismod cursus non. Molexite dignissim sed volupar leugiat vel.",
      image: "/assets/images/comment.png" 
    },
    {
      id: 2,
      author: "Laura Hipster",
      date: "October 03, 2022",
      content: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faacibus bibendum augue id cras purus. At eget euismod cursus non. Molexite dignissim sed volupar leugiat vel.",
      image: "/assets/images/comment.png"
    },
    {
      id: 3,
      author: "Laura Hipster",
      date: "October 03, 2022",
      content: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faacibus bibendum augue id cras purus. At eget euismod cursus non. Molexite dignissim sed volupar leugiat vel.",
      image: "/assets/images/comment.png"
    },
    {
      id: 4,
      author: "Laura Hipster",
      date: "October 03, 2022",
      content: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faacibus bibendum augue id cras purus. At eget euismod cursus non. Molexite dignissim sed volupar leugiat vel.",
      image: "/assets/images/comment.png"
    },
    {
      id: 5,
      author: "Laura Hipster",
      date: "October 03, 2022",
      content: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faacibus bibendum augue id cras purus. At eget euismod cursus non. Molexite dignissim sed volupar leugiat vel.",

      image: "/assets/images/comment.png"
    },
    {
      id: 6,
      author: "Laura Hipster",
      date: "October 03, 2022",
      content: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faacibus bibendum augue id cras purus. At eget euismod cursus non. Molexite dignissim sed volupar leugiat vel.",
      image: "/assets/images/comment.png"
    },
    {
      id: 7,
      author: "Laura Hipster",
      date: "October 03, 2022",
      content: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faacibus bibendum augue id cras purus. At eget euismod cursus non. Molexite dignissim sed volupar leugiat vel.",

      image: "/assets/images/comment.png"
    },
    {
      id: 8,
      author: "Laura Hipster",
      date: "October 03, 2022",
      content: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faacibus bibendum augue id cras purus. At eget euismod cursus non. Molexite dignissim sed volupar leugiat vel.",

      image: "/assets/images/comment.png"
    },
    {
      id: 9,
      author: "Laura Hipster",
      date: "October 03, 2022",
      content: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faacibus bibendum augue id cras purus. At eget euismod cursus non. Molexite dignissim sed volupar leugiat vel.",

      image: "/assets/images/comment.png"
    }
  ];

   const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">Comments</h2> 
      <div className=" mr-8 lg:flex-row gap-8 mb-10">
        <div className="flex mb-6 rounded-lg w-full lg:w-1/3">
          <div className="text-5xl font-bold text-gray-800 mb-3">4.0</div>
          <div className=' pl-4'>
          <div className="flex justify-center mb-3">
            {[1, 2, 3, 4].map((star) => (
              <Star key={star} size={24} className="fill-current text-yellow-400 mr-1" />
            ))}
            <Star size={24} className="text-yellow-400" />
          </div>
          <div className="text-sm ml-5 text-gray-600">based on 146,951 ratings</div>
          </div>
        </div>
        
        <div className="flex-1">
          {ratings.map((rating, index) => (
            <div key={index} className="flex items-center mb-4">
              <div className="w-20 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    size={16} 
                    className={`mr-1 ${star <= rating.stars ? 'fill-current text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              
              <div className="w-12 text-right text-sm text-gray-600 mx-3">
                {rating.percentage}%
              </div>
              
              <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-yellow-400" 
                  style={{ width: `${rating.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-8 mb-8">
        {currentReviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-8 last:border-b-0">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mr-4 flex-shrink-0">
                <Image
                  src={review.image}
                  alt={review.author}
                  width={48}
                  height={48}
                  className='object-cover w-full h-full rounded-full'
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <h4 className="font-semibold text-gray-800">{review.author}</h4>
                  <span className="text-sm text-gray-500 mt-1 sm:mt-0">{review.date}</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  {review.content}
                </p>
                
                <button className="flex items-center text-sm text-black cursor-pointer font-medium hover:text-orange-700 transition-colors">
                  <Reply size={16} className="mr-1 text-orange-600" />
                  Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mb-8">
  <div className="flex space-x-2 items-center">
    <button 
      onClick={() => paginate(currentPage - 1)} 
      disabled={currentPage === 1}
      className={`rounded-full flex items-center justify-center cursor-pointer ${
        currentPage === 1 
          ? 'text-gray-400 cursor-not-allowed' 
          : 'text-gray-600 hover:bg-black'
      }`}
    >
      <ChevronLeft size={16}/>
    </button>
    
    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
      <button
        key={page}
        onClick={() => paginate(page)}
        className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
          currentPage === page 
            ? 'bg-black text-white' 
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        {page}
      </button>
    ))}
    
    <button 
      onClick={() => paginate(currentPage + 1)} 
      disabled={currentPage === totalPages}
      className={`rounded-full flex items-center justify-center cursor-pointer ${
        currentPage === totalPages 
          ? 'text-gray-400 cursor-not-allowed' 
          : 'text-gray-600 hover:bg-black'
      }`}
    >
      <ChevronRight size={16}/>
    </button>
  </div>
</div>
      
      <div className="mt-12">
        <LeaveComment/>
      </div>
    </div>
  );
};

export default Reviews;