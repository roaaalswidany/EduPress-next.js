'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Play, Check, Lock } from 'lucide-react';
import LeaveComment from '../LeaveComment/LeaveComment';

interface Lesson {
  id: string;
  title: string;
  type: string;
  duration: string;
  preview?: boolean;
  completed?: boolean;
  locked?: boolean;
}

interface Chapter {
  id: string;
  title: string;
  lessons: Lesson[];
  totalLessons: number;
  totalDuration: string;
}

interface CourseCurriculumProps {
  course: {
    chapters: Chapter[];
  };
}

const Curriculum: React.FC<CourseCurriculumProps> = ({ course }) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const curriculumData: Chapter[] = [
    {
      id: '1',
      title: 'Lessons With Video Content',
      totalLessons: 5,
      totalDuration: '45 Mins',
      lessons: [
        {
          id: '1-1',
          title: 'Lessons with video content',
          type: 'video',
          duration: '12:30',
          preview: true,
          completed: true 
        },
        {
          id: '1-2',
          title: 'Lessons with video content',
          type: 'video',
          duration: '10:05',
          preview: true,
          completed: true 
        },
        {
          id: '1-3',
          title: 'Lessons with video content',
          type: 'video',
          duration: '2:25',
          preview: true,
          completed: true 
        },
        {
          id: '1-4',
          title: 'Lessons with video content',
          type: 'video',
          duration: '15:00',
          preview: true,
          locked: true 
        },
        {
          id: '1-5',
          title: 'Lessons with video content',
          type: 'video',
          duration: '5:00',
          preview: true,
          locked: true 
        }
      ]
    },
    {
      id: '2',
      title: 'Lessons With Video Content',
      totalLessons: 3,
      totalDuration: '45 Mins',
      lessons: [
        {
          id: '2-1',
          title: 'Lessons with video content',
          type: 'video',
          duration: '15:00',
          preview: true,
          completed: true 
        },
        {
          id: '2-2',
          title: 'Lessons with video content',
          type: 'video',
          duration: '20:00',
          preview: true,
          completed: true 
        },
        {
          id: '2-3',
          title: 'Lessons with video content',
          type: 'video',
          duration: '10:00',
          preview: true,
          locked: true 
        }
      ]
    },
    {
      id: '3',
      title: 'Lessons With Video Content',
      totalLessons: 5,
      totalDuration: '45 Mins',
      lessons: [
        {
          id: '3-1',
          title: 'Lessons with video content',
          type: 'video',
          duration: '12:00',
          preview: true,
          completed: true 
        },
        {
          id: '3-2',
          title: 'Lessons with video content',
          type: 'video',
          duration: '15:00',
          preview: true,
          completed: true 
        },
        {
          id: '3-3',
          title: 'Lessons with video content',
          type: 'video',
          duration: '10:00',
          preview: true,
          completed: true 
        },
        {
          id: '3-4',
          title: 'Lessons with video content',
          type: 'video',
          duration: '5:00',
          preview: true,

        locked: true 
        },
        {
          id: '3-5',
          title: 'Lessons with video content',
          type: 'video',
          duration: '3:00',
          preview: true,
          locked: true 
        }
      ]
    },
    {
      id: '4',
      title: 'Lessons With Video Content',
      totalLessons: 5,
      totalDuration: '45 Mins',
      lessons: [
        {
          id: '4-1',
          title: 'Lessons with video content',
          type: 'video',
          duration: '10:00',
          preview: true,
          completed: true 
        },
        {
          id: '4-2',
          title: 'Lessons with video content',
          type: 'video',
          duration: '12:00',
          preview: true,
          completed: true 
        },
        {
          id: '4-3',
          title: 'Lessons with video content',
          type: 'video',
          duration: '8:00',
          preview: true,
          completed: true 
        },
        {
          id: '4-4',
          title: 'Lessons with video content',
          type: 'video',
          duration: '10:00',
          preview: true,
          locked: true 
        },
        {
          id: '4-5',
          title: 'Lessons with video content',
          type: 'video',
          duration: '5:00',
          preview: true,
          locked: true 
        }
      ]
    },
    {
      id: '5',
      title: 'Lessons With Video Content',
      totalLessons: 5,
      totalDuration: '45 Mins',
      lessons: [
        {
          id: '5-1',
          title: 'Lessons with video content',
          type: 'video',
          duration: '15:00',
          preview: true,
          completed: true 
        },
        {
          id: '5-2',
          title: 'Lessons with video content',
          type: 'video',
          duration: '10:00',
          preview: true,
          completed: true 
        },
        {
          id: '5-3',
          title: 'Lessons with video content',
          type: 'video',
          duration: '8:00',
          preview: true,
          completed: true 
        },
        {
          id: '5-4',
          title: 'Lessons with video content',
          type: 'video',
          duration: '7:00',
          preview: true,
          locked: true 
        },
        {
          id: '5-5',
          title: 'Lessons with video content',
          type: 'video',
          duration: '5:00',
          preview: true,
          locked: true 
        }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Curriculum</h2>
      
      <div className="space-y-4">
        {curriculumData.map((chapter) => (
          <div key={chapter.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleItem(`chapter-${chapter.id}`)}
              className="bg-white px-6 py-4 flex justify-between items-center w-full text-left hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="flex items-center">
                <h3 className="font-semibold text-gray-900 text-lg">{chapter.title}</h3>
                <span className="ml-4 text-sm text-gray-500">
                  {chapter.totalLessons} Lessons • {chapter.totalDuration}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">
                  {openItems[`chapter-${chapter.id}`] ? 'Hide' : 'Show'}
                </span>
                {openItems[`chapter-${chapter.id}`] ? (

      <ChevronUp size={20} className="text-gray-500" />
                ) : (
                  <ChevronDown size={20} className="text-gray-500" />
                )}
              </div>
            </button>
            
            {openItems[`chapter-${chapter.id}`] && (
              <div className="bg-gray-50 border-t border-gray-200">
                {chapter.lessons.map((lesson, index) => (
                  <div key={lesson.id} className={`px-6 py-4 flex justify-between items-center ${
                    index !== chapter.lessons.length - 1 ? 'border-b border-gray-200' : ''
                  }`}>
                    <div className="flex items-center space-x-4">
                      <div className="p-2 rounded-full bg-blue-100">
                        <Play size={16} className="text-blue-500" />
                      </div>
                      <span className="text-gray-800 font-medium">{lesson.title}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-xs bg-blue-500 text-white px-3 py-1 rounded-full border border-blue-600">
                        Preview
                      </span>
                      <span className="text-sm text-gray-500 flex items-center">
                          {lesson.duration}
                        {lesson.completed ? (
                          <Check size={14} className="ml-1 text-gray-400" />
                        ) : lesson.locked ? (
                          <Lock size={14} className="ml-1 text-gray-400" />
                        ) : null}
                      </span>
                    </div>
                  </div>
                ))}
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

export default Curriculum;