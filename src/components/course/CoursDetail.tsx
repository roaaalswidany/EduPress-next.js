import React from 'react';
import { Course } from '@/lib/types/index';
import Button from '@/components/ui/Button';
import Image from 'next/image';

interface CourseDetailProps {
  course: Course;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3">
          <div className="h-64 bg-gray-200 flex items-center justify-center">
              <Image
                      src={course.image}
                      width={500}
                      height={192}
                      className="text-white font-medium" alt={''}        />
          </div>
        </div>
        
        <div className="md:w-2/3 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-sm font-medium text-blue-600">{course.category}</span>
              <h1 className="text-2xl font-bold text-gray-900 mt-1">{course.title}</h1>
              <p className="text-gray-600 mt-2">By {course.author}</p>
            </div>
            
            <div className="flex items-center">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-1 text-lg font-medium text-gray-700">{course.rating}</span>
              <span className="text-gray-500 text-sm ml-1">({course.reviews.toLocaleString()})</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>{course.students} students</span>
            </div>
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>{course.lessons} lessons</span>
            </div>
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>{course.quizzes} quizzes</span>

</div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Course Description</h2>
            <p className="text-gray-700">{course.description}</p>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              {course.price > 0 ? (
                <>
                  <span className="text-2xl font-bold text-gray-900">${course.price.toFixed(2)}</span>
                  <span className="text-lg text-gray-500 line-through ml-2">${course.originalPrice.toFixed(2)}</span>
                </>
              ) : (
                <span className="text-2xl font-bold text-green-600">Free</span>
              )}
            </div>
            <Button size="lg">
              {course.price > 0 ? 'Enroll Now' : 'Start Learning'}
            </Button>
          </div>
        </div>
      </div>
      
      <div className="p-6 border-t border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Course Content</h2>
        <div className="space-y-4">
          {course.chapters.map((chapter) => (
            <div key={chapter.id} className="border border-gray-200 rounded-md overflow-hidden">
              <div className="bg-gray-50 px-4 py-3 flex justify-between items-center">
                <h3 className="font-medium text-gray-900">{chapter.title}</h3>
                <span className="text-sm text-gray-500">{chapter.lessons.length} lessons</span>
              </div>
              <div className="divide-y divide-gray-200">
                {chapter.lessons.map((lesson) => (
                  <div key={lesson.id} className="px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-gray-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{lesson.title}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 ml-4">{lesson.duration}</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {lesson.type === 'video' ? 'Video' : lesson.type === 'text' ? 'Text' : 'Quiz'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;