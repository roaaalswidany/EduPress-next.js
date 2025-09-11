'use client';

import React, { useState } from 'react';
import { Course } from '@/lib/types/index';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqsProps {
  course: Course;
}

const Faqs: React.FC<FaqsProps> = ({ course }) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const faqs = [
    {
      id: '1',
      question: 'What Does Royalty Free Mean?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Utma, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.'
    },
    {
      id: '2',
      question: 'What is LearnPress?',
      answer: 'LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.'
    },
    // Add more FAQs as needed
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="border border-gray-200 rounded-md overflow-hidden">
            <button 
              onClick={() => toggleItem(faq.id)}
              className="bg-white px-6 py-4 flex justify-between items-center w-full text-left"
            >
              <h3 className="font-medium text-gray-900">{faq.question}</h3>
              {openItems[faq.id] ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            
            {openItems[faq.id] && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;