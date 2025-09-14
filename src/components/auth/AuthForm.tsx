'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface AuthFormProps {
  isLogin: boolean;
  onSubmit: (e: React.FormEvent) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formData: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({
  isLogin,
  onSubmit,
  formData,
  onChange,
  isLoading = false
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <input
          name="email"
          type={isLogin ? "text" : "email"}
          required
          placeholder={isLogin ? "Email or username*" : "Email*"}
          value={formData.email}
          onChange={onChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {!isLogin && (
        <div>
          <input
            name="username"
            type="text"
            required
            placeholder="Username*"
            value={formData.username}
            onChange={onChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      )}

      <div className="relative">
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          required
          placeholder="Password*"
          value={formData.password}
          onChange={onChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      {!isLogin && (
        <div className="relative">
          <input
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            required
            placeholder="Confirm Password*"
            value={formData.confirmPassword}
            onChange={onChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      )}

      {isLogin && (
        <div className="flex items-center">
          <input
            id="remember-me"
            type="checkbox"
            className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white py-3 px-4 rounded-md font-medium transition-colors"
      >
        {isLoading ? 'Loading...' : isLogin ? 'Login' : 'Register'}
      </button>

      {isLogin && (
        <div className="text-left">
          <a href="/forgot-password" className="text-sm text-orange-600 hover:text-orange-500">
            Lost your password?
          </a>
        </div>
      )}
    </form>
  );
};

export default AuthForm;