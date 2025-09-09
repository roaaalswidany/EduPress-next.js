'use client';

import { useState, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { registerUser } from '@/store/slices/authSlice';
import { AppDispatch, RootState, RegisterData } from '@/lib/types/index';
import RegisterForm from '@/components/auth/RegisterForm';
import Link from 'next/link';

export default function RegisterPage() {
  const [formData, setFormData] = useState<RegisterData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { status, isAuthenticated } = useSelector((state: RootState) => state.auth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    const result = await dispatch(registerUser(formData));
    
    if (result.success) {
      router.push('/login');
    } else {
      setError(result.error || 'Regiseration failed');
    }
  };

  if (isAuthenticated) {
    router.push('/');
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create a new account
          </h2>
        </div>
        <RegisterForm 
          formData={formData} 
          handleChange={handleChange} 
          handleSubmit={handleSubmit} 
          error={error}
          isLoading={status === 'loading'}
        />
        <div className="text-center">
          <p className="text-sm text-gray-600">
            already have an account?
            <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
              LogIn
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}