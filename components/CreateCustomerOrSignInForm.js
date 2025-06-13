'use client';

import React, { useState } from 'react';
import { createCustomer } from '@/actions/createCustomer';
import { signInCustomer } from '@/actions/signInCustomer';
import AnimatedButton from '@/components/ui/AnimatedButton';

export default function CreateCustomerOrSinInForm({ onCustomerChange }) {
  const [mode, setMode] = useState('signup');
  const [form, setForm] = useState({ email: '', name: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (mode === 'signup') {
      const result = await createCustomer(form);
      setLoading(false);
      if (result.success) {
        onCustomerChange(result.customer);
      } else {
        setError(result.error || 'Could not create account.');
      }
    } else {
      const result = await signInCustomer(form);
      setLoading(false);
      if (result.success) {
        onCustomerChange(result.customer);
      } else {
        setError(result.error || 'Could not sign in.');
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col gap-8">
        <div className="secondary_bg_color md:w-[45%] md:mx-auto p-6 rounded-lg border-[.1rem] border-gray-100 shadow-md mb-8">
          <div className="flex justify-center mb-4">
            <button
              type="button"
              className={`px-4 py-2 rounded-l-lg ${mode === 'signup' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}
              onClick={() => setMode('signup')}
            >
              Sign Up / Guest
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-r-lg ${mode === 'signin' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}
              onClick={() => setMode('signin')}
            >
              Sign In
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            {mode === 'signup' && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            {mode === 'signin' && (
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            {mode === 'signup' && (
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Password (optional for guest checkout)</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Leave blank for guest checkout"
                />
              </div>
            )}
            {error && <div className="text-red-400 text-sm">{error}</div>}
            <AnimatedButton type="submit" className="w-full mt-2">
              {loading ? 'Processing...' : mode === 'signup' ? 'Continue as Guest / Sign Up' : 'Sign In'}
            </AnimatedButton>
          </form>
        </div>
      </div>
    </div>
  );
}