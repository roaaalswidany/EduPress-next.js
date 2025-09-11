'use client';

import React from 'react';

interface CourseTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const CourseTabs: React.FC<CourseTabsProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'instructor', label: 'Instructor' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'reviews', label: 'Reviews' }
  ];

  return (
    <div className="border-t border-gray-200">
      <nav className="flex overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-4 font-medium text-sm capitalize whitespace-nowrap ${
              activeTab === tab.id
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default CourseTabs;