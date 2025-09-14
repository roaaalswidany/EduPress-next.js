'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

const Let: React.FC = () => {
  return (
    <section className="m-4 md:m-16 p-4 md:p-8 relative">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/let's.png"
          alt="LearnPress Background"
          fill
          className="object-cover rounded-2xl md:rounded-4xl"
          priority
        />
        <div className="absolute inset-0 bg-opacity-10 rounded-2xl md:rounded-4xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row justify-between items-center py-8 md:py-12 gap-4 md:gap-0">
        <div className="flex items-center gap-3 md:gap-4">
          <Image
            src="/assets/images/student.png"    
            alt="Online School"
            width={60}
            height={60}
            className="object-contain rounded-2xl md:rounded-4xl"
            priority
          />
          
          <p className="text-base md:text-lg font-medium text-gray-800 md:text-gray-700">
            Let is Start With Academy LMS
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full md:w-auto justify-center">
          <Button 
            className="text-orange-500 border-2 border-orange-500 hover:bg-orange-50 px-4 py-2 md:px-6 md:py-3 rounded-2xl md:rounded-4xl font-medium cursor-pointer text-sm md:text-base w-full sm:w-auto text-center"
          >
            I am a student
          </Button>
          <Button 
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-2xl md:rounded-4xl font-medium cursor-pointer text-sm md:text-base w-full sm:w-auto text-center"
          >
            Become an Instructor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Let;