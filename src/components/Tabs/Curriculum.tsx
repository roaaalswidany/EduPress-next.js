'use client';

import React, { useState } from 'react';
import { Course } from '@/lib/types/index';
import { ChevronDown, ChevronUp, Play, FileText } from 'lucide-react';

interface CourseCurriculumProps {
  course: Course;
}

const Curriculum: React.FC<CourseCurriculumProps> = ({ course }) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Course Content</h2>
      <div className="space-y-4">
        {course.chapters.map((chapter) => (
          <div key={chapter.id} className="border border-gray-200 rounded-md overflow-hidden">
            <button
              onClick={() => toggleItem(`chapter-${chapter.id}`)}
              className="bg-gray-50 px-4 py-3 flex justify-between items-center w-full text-left"
            >
              <h3 className="font-medium text-gray-900">{chapter.title}</h3>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">{chapter.lessons.length} lessons</span>
                {openItems[`chapter-${chapter.id}`] ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
            </button>
            
            {openItems[`chapter-${chapter.id}`] && (
              <div className="divide-y divide-gray-200">
                {chapter.lessons.map((lesson) => (
                  <div key={lesson.id} className="px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center">
                      {lesson.type === 'video' ? (
                        <Play size={18} className="text-gray-400 mr-2" />
                      ) : (
                        <FileText size={18} className="text-gray-400 mr-2" />
                      )}
                      <span className="text-gray-700">{lesson.title}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-4">{lesson.duration}</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {lesson.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Curriculum;