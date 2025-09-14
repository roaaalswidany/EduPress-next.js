'use client';

import React, { useState } from 'react';

const LeaveComment: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
    saveInfo: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="border-t pt-8">
      <h3 className="text-2xl font-bold mb-6">Leave A Comment</h3>
      <p className="text-gray-600 mb-6">
        Your email address will not be published. Required fields are marked *
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
            Comment*
          </label>
          <textarea
            id="comment"
            name="comment"
            rows={4}
            value={formData.comment}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            required
          ></textarea>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="saveInfo"
            name="saveInfo"
            checked={formData.saveInfo}
            onChange={handleChange}
            className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
          />
          <label htmlFor="saveInfo" className="ml-2 block text-sm text-gray-700">
            Save my name, email in this browser for the next time I comment
          </label>
        </div>
        
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition duration-200 cursor-pointer"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default LeaveComment;