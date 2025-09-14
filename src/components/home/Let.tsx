'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

const Let: React.FC = () => {
  return (
    <section className="m-16 p-8 relative">
      <div className="absolute inset-0 mx-auto px-4">
        <Image
          src="/assets/images/let's.png"
          alt="LearnPress Background"
          fill
          className="mx-auto px-4 rounded-4xl"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex justify-between items-center py-12">
        <div className="w-full flex items-center justify-between">
          
          <div className="flex items-center gap-4 ml-8"> 
            <Image
              src="/assets/images/student.png"    
              alt="Online School"
              width={100}
              height={100}
              className="object-contain rounded-4xl"
              priority
            />
            
            <p className="text-lg font-medium text-gray-700">
              Let’s Start With Academy LMS
            </p>
          </div>
          
          <div className="flex gap-4 mr-8"> 
            <Button 
              className="text-orange-500 border-2 border-orange-500 hover:bg-orange-50 px-6 py-3 rounded-4xl font-medium cursor-pointer"
            >
              I’m a student
            </Button>
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-4xl font-medium cursor-pointer"
            >
              Become an Instructor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Let;