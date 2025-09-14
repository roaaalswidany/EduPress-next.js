'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

const LearnPressAddOns: React.FC = () => {
  return (
    <section className=" mt-16 ml-16 mr-16 pl-12 relative">
      <div className="absolute inset-0 mx-auto px-4">
        <Image
          src="/assets/images/learnPress.png"
          alt="LearnPress Background"
          fill
          className=" mx-auto px-4 rounded-4xl"
          priority
        />
        <div className="absolute"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex items-center">
        <div className="max-w-2xl">
            <p className=' text-gray-600 mt-12'>GET MORE POWER FROM</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            LearnPress Add-Ons
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-lg text-gray-600">
            The next level of LearnPress-LMS WordPress plugin. More Powerfull, Flexible and Magical Inside.
          </p>
          
          <div className="mt-10">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg cursor-pointer">
            Explorer Course
          </Button>
            <div className="h-12"></div> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnPressAddOns;