import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { number: '25K +', label: 'Active Students' },
    { number: '899', label: 'Total Courses' },
    { number: '158', label: 'Instructors' },
    { number: '100%', label: 'Satisfaction' },
  ];

  return (
    <section className="py-16 bg-white"> 
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-200 rounded-lg p-10 text-center shadow-lg"> 
              <div className="text-4xl font-bold mb-2 text-orange-500">{stat.number}</div>
              <div className="text-2xl font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;