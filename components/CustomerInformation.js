'use client';

import React, { useState } from 'react';

export default function CustomerInformation() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    }

    if (e.target.phone === 'phone') {
      setPhone(e.target.value);
    }

    if (e.target.email === 'email') {
      setEmail(e.target.value);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col gap-8">
        <div className="secondary_bg_color md:w-[45%] md:mx-auto p-6 rounded-lg border-[.1rem] border-gray-100 shadow-md space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name or Business Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg"
              value={name}
              onChange={handleChange}
              required={true}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg"
              value={phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}