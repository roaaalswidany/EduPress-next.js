'use client';

import React from 'react';
import Image from 'next/image';
import { CheckIcon } from 'lucide-react';

const GrowYourSkill: React.FC = () => {
  const certifications = [
    { name: 'Certification', icon: <CheckIcon size={24} color='green'/> },
    { name: 'Certification', icon: <CheckIcon size={24} color='green'/> },
    { name: 'Certification', icon: <CheckIcon size={24} color='green'/> },
    { name: 'Certification', icon: <CheckIcon size={24} color='green'/> },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <div className="relative">
              <Image
                src="/assets/images/Grow.png"
                alt="Grow"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Grow your skill with LearnPress LMS</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We denounce with righteous indignation and dislike men who are so beguiled and demoralized that cannot trouble.
            </p>
            
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center p-3 rounded-lg">
                  <span className="text-2xl mr-4">{cert.icon}</span>
                  <span className="font-medium text-gray-700">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowYourSkill;