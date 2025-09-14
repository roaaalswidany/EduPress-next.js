'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { loginUser, registerUser } from '@/store/slices/authSlice';
import { AppDispatch, RootState } from '@/store';
import AuthForm from '@/components/auth/AuthForm';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { status, error } = useSelector((state: RootState) => state.auth);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await dispatch(loginUser(loginData));
    
    if (result.success) {
      router.push('/');
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (registerData.password !== registerData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    const result = await dispatch(registerUser(registerData));
    
    if (result.success) {
      router.push('/login');
    }
  };

  return (
    <div className=" bg-gray-50 flex flex-col">
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-800">Homepage</Link>
            <span className="mx-2">›</span>
            <span>Login / Register</span>
          </nav>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className={`bg-white p-8 rounded-lg shadow-md ${isLogin ? 'block' : 'hidden md:block'}`}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}
              <AuthForm
                isLogin={true}
                onSubmit={handleLoginSubmit}
                formData={loginData}
                onChange={handleLoginChange}
                isLoading={status === 'loading'}
              />
            </div>

            <div className={`bg-white p-8 rounded-lg shadow-md ${isLogin ? 'hidden md:block' : 'block'}`}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Register</h2>
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}
              <AuthForm
                isLogin={false}
                onSubmit={handleRegisterSubmit}
                formData={registerData}
                onChange={handleRegisterChange}
                isLoading={status === 'loading'}
              />
            </div>
          </div>
          <div className="mt-8 text-center md:hidden">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              {isLogin ? 'Need an account? Register here' : 'Already have an account? Login here'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}