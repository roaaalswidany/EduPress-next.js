'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

const LearnPressAddOns: React.FC = () => {
  return (
    <section className="mt-8 md:mt-16 mx-4 md:mx-16 px-4 md:px-12 relative">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/learnPress.png"
          alt="LearnPress Background"
          fill
          className="object-cover rounded-2xl md:rounded-4xl"
          priority
        />
        <div className="absolute inset-0 bg-opacity-20 rounded-2xl md:rounded-4xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex items-center py-12 md:py-24">
        <div className="max-w-2xl text-center md:text-left">
          <p className='text-gray-200 md:text-gray-600 text-sm md:text-base mb-2'>GET MORE POWER FROM</p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 md:text-gray-800">
            LearnPress Add-Ons
          </h1>
          <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-lg text-gray-200 md:text-gray-600">
            The next level of LearnPress-LMS WordPress plugin. More Powerfull, Flexible and Magical Inside.
          </p>
          
          <div className="mt-6 md:mt-10">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg cursor-pointer text-sm md:text-base">
              Explorer Course
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnPressAddOns;