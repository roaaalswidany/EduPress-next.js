'use client';

import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { number: '25K+', label: 'Active Students' },
    { number: '899', label: 'total Courses' },
    { number: '158', label: 'Instructor' },
    { number: '100%', label: 'Satisfaction Rate' },
  ];

  return (
    <section className=" py-12">
      <div className="container bg-gray-200 mx-auto px-4 mt-12">
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className=" p-6 rounded-lg backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2 text-orange-500">{stat.number}</div>
              <div className="text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;