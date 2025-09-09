'use client';

import React from 'react';
import { RegisterData } from '@/lib/types/index';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

interface RegisterFormProps {
  formData: RegisterData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  error: string;
  isLoading: boolean;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ 
  formData, 
  handleChange, 
  handleSubmit, 
  error, 
  isLoading 
}) => {
  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="rounded-md shadow-sm -space-y-px">
        <Input
          id="username"
          name="username"
          type="text"
          autoComplete="username"
          required
          label="username"
          placeholder="username"
          value={formData.username}
          onChange={handleChange}
        />
        
        <Input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          label="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
        
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
          label="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        />
        
        <Input
          id="confirm-password"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          required
          label="confirm Password"
          placeholder="confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center">
        <input
          id="agree-terms"
          name="agree-terms"
          type="checkbox"
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          required
        />
        <label htmlFor="agree-terms" className="mr-2 block text-sm text-gray-900">
            I agree to <a href="#" className="text-blue-600 hover:text-blue-500">Terms and conditions</a>
        </label>
      </div>

      <div>
        <Button
          type="submit"
          className="w-full"
          isLoading={isLoading}
        >
           create an account 
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;