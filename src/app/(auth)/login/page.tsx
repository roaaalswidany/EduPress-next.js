'use client';

import { useState } from 'react';
import Link from 'next/link';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
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
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    setError('');
    setIsLoading(false);
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    if (registerData.password !== registerData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }
    
    setIsLoading(false);
  };

  return (
    <div className="bg-gray-50">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className=" p-4 text-sm text-gray-600 bg-gray-300">
          <Link href="/" className="hover:text-gray-800">Homepage</Link>
          <span className="mx-2">›</span>
          <span>Login / Register</span>
        </nav>
      </div>

      {/* Auth Forms */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Login Form */}
          <div className={`bg-white p-8 rounded-lg shadow-md ${isLogin ? 'block' : 'hidden md:block'}`}>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <Input
                id="login-email"
                name="email"
                type="text"
                required
                label="Email or username*"
                value={loginData.email}
                onChange={handleLoginChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              
              <Input
                id="login-password"
                name="password"
                type="password"
                required
                label="Password*"
                value={loginData.password}
                onChange={handleLoginChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 cursor-pointer">
                    Remember me
                  </label>
                </div>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-md font-medium cursor-pointer"
                isLoading={isLoading}

>
                Login
              </Button>
              
              <div className="text-center">
                <Link href="/forgot-password" className="text-sm text-orange-600 hover:text-orange-500">
                  Lost your password?
                </Link>
              </div>
            </form>
          </div>

          {/* Register Form */}
          <div className={`bg-white p-8 rounded-lg shadow-md ${isLogin ? 'hidden md:block' : 'block'}`}>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Register</h2>
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <Input
                id="register-email"
                name="email"
                type="email"
                required
                label="Email*"
                value={registerData.email}
                onChange={handleRegisterChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              
              <Input
                id="register-username"
                name="username"
                type="text"
                required
                label="Username*"
                value={registerData.username}
                onChange={handleRegisterChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              
              <Input
                id="register-password"
                name="password"
                type="password"
                required
                label="Password*"
                value={registerData.password}
                onChange={handleRegisterChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              
              <Input
                id="register-confirm-password"
                name="confirmPassword"
                type="password"
                required
                label="Confirm Password*"
                value={registerData.confirmPassword}
                onChange={handleRegisterChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              
              <Button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-md font-medium cursor-pointer"
                isLoading={isLoading}
              >
                Register
              </Button>
            </form>
          </div>
        </div>

        {/* Toggle Button for Mobile */}
        <div className="mt-8 text-center md:hidden">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-orange-600 hover:text-orange-700 font-medium cursor-pointer"
          >
            {isLogin ? 'Need an account? Register here' : 'Already have an account? Login here'}
          </button>
        </div>
      </div>
    </div>
  );
}