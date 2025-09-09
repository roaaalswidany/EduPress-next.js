'use client';

import { useState, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/store/slices/authSlice';
import { AppDispatch, RootState, LoginCredentials } from '@/lib/types/index';
import LoginForm from '@/components/auth/LoginForm';
import Link from 'next/link';

export default function LoginPage() {
  const [formData, setFormData] = useState<LoginCredentials>({
    email: '',
    password: '',
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
    
    const result = await dispatch(loginUser(formData));
    
    if (result.success) {
      router.push('/');
    } else {
      setError(result.error || 'login failed');
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
            login to your account
          </h2>
        </div>
        <LoginForm 
          formData={formData} 
          handleChange={handleChange} 
          handleSubmit={handleSubmit} 
          error={error}
          isLoading={status === 'loading'}
        />
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?
            <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500">
              Register now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}