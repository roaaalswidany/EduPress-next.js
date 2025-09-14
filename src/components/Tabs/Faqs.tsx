'use client';

import React, { useState } from 'react';
import { Course } from '@/lib/types/index';
import { ChevronDown, ChevronUp } from 'lucide-react';
import LeaveComment from '../LeaveComment/LeaveComment';

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
      question: 'What Does Royalty Free Mean?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Utma, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.'
    },
    {
      id: '3',
      question: 'What Does Royalty Free Mean?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Utma, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.'
    },
    {
      id: '4',
      question: 'What Does Royalty Free Mean?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Utma, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.'
    },
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">Frequently Asked Questions</h2>
      
      <div className="space-y-6">
        {faqs.map((faq) => (
          <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300">
            <button 
              onClick={() => toggleItem(faq.id)}
              className="bg-white px-6 py-5 flex justify-between items-center w-full text-left hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
            >
              <h3 className="font-semibold text-lg text-gray-900">{faq.question}</h3>
              {openItems[faq.id] ? (
                <ChevronUp size={24} className="text-orange-600 flex-shrink-0" />
              ) : (
                <ChevronDown size={24} className="text-gray-500 flex-shrink-0" />
              )}
            </button>
            
            {openItems[faq.id] && (
              <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
            <div className="mt-12">
        <LeaveComment/>
      </div>
    </div>
  );
};

export default Faqs;