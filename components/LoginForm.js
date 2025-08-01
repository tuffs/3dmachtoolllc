'use client';

import { useState } from 'react';
import loginAuthentication from '@/actions/loginAuthentication';

export default function LoginForm() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [incorrectCredentials, setIncorrectCredentials] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...prev,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async () => {
    setIsAuthenticating(true);

    try {
      const authenticationResult = await loginAuthentication(formData);
      if (!authenticationResult) {
        setIncorrectCredentials(true);
      }
    } catch (error) {
      console.error('Error authenticating administrator', error);
    }

    setIsAuthenticating(false);
  }

  if (isAuthenticating ? (
    <>
      <div className="max-w-4xl mx-auto bg-inherit">
        <h1 className="text-4xl text-gray-200 font-bold">Administrative Login</h1>
        <p className="text-gray-400"><i>Please wait while we authenticate your account's credentials...</i></p>
      </div>
    </>
  ) : (
    <>
      <div className="max-w-4xl mx-auto bg-inherit">
        <h1 className="text-4xl text-gray-200 font-bold">Administrative Login</h1>

        {incorrectCredentials ? (
          <>
            <p className="text-gray-400 mt-3"><i>Enter your credentials below to sign in.</i></p>
            <p className="text-red-400 mb-3"><i>Please try again, check carefully as you provided incorrect credentials to the form.</i></p>
          </>
        ) : (
          <>
            <p className="text-gray-400 my-3"><i>Enter your credentials below to sign in.</i></p>
          </>
        )}
        <form action={handleSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            className=""
            onChange={handleChange}
            value={formData.email}
            placeholder="email@server.com"
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            className=""
            onChange={handleChange}
            value={formData.password}
            placeholder="Your Password"
            required
          />
          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  ));
}