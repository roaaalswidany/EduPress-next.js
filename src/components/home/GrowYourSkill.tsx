'use client';

import React from 'react';

const GrowYourSkill: React.FC = () => {
  const certifications = [
    { name: 'Web Development', icon: '💻' },
    { name: 'Data Science', icon: '📊' },
    { name: 'Digital Marketing', icon: '📱' },
    { name: 'Graphic Design', icon: '🎨' },
    { name: 'Business Management', icon: '💼' },
    { name: 'Language Learning', icon: '🌐' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-blue-100 rounded-lg flex items-center justify-center">
                <div className="text-6xl">🚀</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg">
                Grow Your Skill
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pr-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Grow Your Skill</h2>
            <p className="text-gray-600 mb-6">
              Enhance your professional skills with our comprehensive courses and earn industry-recognized certifications.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Popular Certifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition duration-300">
                    <span className="text-2xl mr-3">{cert.icon}</span>
                    <span className="font-medium text-gray-700">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
              Get Certified
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowYourSkill;