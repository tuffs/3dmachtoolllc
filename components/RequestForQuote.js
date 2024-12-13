'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FiUploadCloud, FiFileText, FiUser } from 'react-icons/fi';
import dynamic from 'next/dynamic';
import { createRequestForQuote } from '@/actions/createRequestForQuote';

const AnimatedButton = dynamic(() => import('@/components/ui/AnimatedButton'), { ssr: false });

const SuccessMessage = () => {
  return (
    <div
      className={`mt-8 mb-12 mx-auto p-12 bg-gray-700 text-white rounded-xl w-[90%] md:w-[400px] transition-opacity duration-1000`}
    >
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-3" style={{ textShadow: "1px 1px rgba(255,255,255,.25)" }}>✅</h1>
      <h2 className="text-2xl text-gray-200 font-bold text-center" style={{ textShadow: "1px 1px rgba(0,0,0,.4)" }}>Request for Quote Sent!</h2>
      <p className="text-center text-gray-300" style={{ textShadow: "1px 1px rgba(0,0,0,.24)" }}>We have received your request and will be in touch as soon as possible.</p>
    </div>
  );
}

export default function RequestForQuote() {
  const [state, setState] = useState({ success: false, error: null, formSubmitted: false });
  const [files, setFiles] = useState([]);
  const formRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    // Append each file to formData
    files.forEach((file, index) => {
      formData.append(`uploadedDesignFiles`, file);
    });

    try {
      const result = await createRequestForQuote(formData);
      setState({ ...result, formSubmitted: result.success });
      if (result.success) {
        setFiles([]);
        formRef.current.reset();
      }
    } catch (error) {
      setState({ success: false, error: error.message, formSubmitted: false });
    }
  };

  return (
    <div className="container mx-auto p-4 mb-24">
      <p className="text-gray-200 mb-6">
        Our team of experts has developed a streamlined process to provide you with a quotation for your projects. Please provide us with the following information and we will get back to you as soon as possible. You may <a href="/contact-us" className="underline hover:text-gray-300">contact us</a> directly if you have any questions.
      </p>
      {state.error && (
        <div className="mb-4 p-4 bg-red-500 text-white rounded">
          {state.error}
        </div>
      )}
      {state.success && state.formSubmitted ? (
        <SuccessMessage />
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Contact Information Card */}
            <div className="secondary_bg_color p-6 rounded-lg border-[.1rem] border-gray-100 shadow-md">
              <h2 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
                <FiUser className="mr-2" /> Contact Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input type="text" id="name" name="name" className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg" placeholder="Enter your name" required />
                </div>
                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-gray-300 mb-1">Business Name</label>
                  <input type="text" id="businessName" name="businessName" className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg" placeholder="Enter your business name" required />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                  <input type="tel" id="phoneNumber" name="phoneNumber" className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg" placeholder="Enter your phone number" required />
                </div>
                <div>
                  <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                  <input type="email" id="emailAddress" name="emailAddress" className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg" placeholder="Enter your email address" required />
                </div>
              </div>
            </div>

            {/* Project Description Card */}
            <div className="secondary_bg_color p-6 rounded-lg border-[.1rem] border-gray-100 shadow-md">
              <h2 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
                <FiFileText className="mr-2" /> Project Description
              </h2>
              <textarea
                id="projectDescription"
                name="projectDescription"
                className="w-full h-32 p-2 text-sm text-gray-300 border border-gray-100 tertiary_bg_color rounded-lg resize-none mb-4"
                placeholder="Describe your project requirements or additional requests..."
                required
              ></textarea>
              <p className="text-xs text-gray-300 mb-4">Our team will review your requirements and provide a tailored quote based on your specific needs.</p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-300 mb-1">Desired Quantity</label>
                  <input type="number" id="quantity" name="quantity" min="1" className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg" placeholder="Enter quantity" required />
                </div>
                <div>
                  <label htmlFor="leadTimeWeeks" className="block text-sm font-medium text-gray-300 mb-1">Lead Time in Weeks</label>
                  <input type="number" id="leadTimeWeeks" name="leadTimeWeeks" className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg" placeholder="Enter lead time" required />
                </div>
                <div>
                  <label htmlFor="material" className="block text-sm font-medium text-gray-300 mb-1">Material</label>
                  <input type="text" id="material" name="material" className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg" placeholder="Enter material" required />
                </div>
                <div>
                  <label htmlFor="unitOfMeasurement" className="block text-sm font-medium text-gray-300 mb-1">Unit Of Measurement - Inches " or Millimeters mm.</label>
                  <input type="text" id="unitOfMeasurement" name="unitOfMeasurement" className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg" placeholder="Enter Unit of Measurement" required />
                </div>
                <div>
                  <label htmlFor="tolerance" className="block text-sm font-medium text-gray-300 mb-1">Project Tolerance by Material</label>
                  <input type="text" id="tolerance" name="tolerance" className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg" placeholder="Enter tolerance" required />
                </div>
              </div>
            </div>

            {/* File Upload Card */}
            <div className="secondary_bg_color p-6 rounded-lg border-[.1rem] border-gray-100 shadow-md">
              <h2 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
                <FiUploadCloud className="mr-2" /> Upload Design Files
              </h2>
              <div className="tertiary_bg_color border-2 border-dashed border-gray-400 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-300 mb-2">Drag and drop files here or click to upload</p>
                <input
                  type="file"
                  className="hidden"
                  id="uploadedDesignFiles"
                  name="uploadedDesignFiles"
                  multiple
                  onChange={handleFileChange}
                />
                <button
                  type="button"
                  onClick={() => document.getElementById('uploadedDesignFiles').click()}
                  className="w-full mt-6 tertiary_bg_color border-[.1rem] border-gray-100 text-gray-200 font-semibold py-2 px-4 rounded-lg text-sm"
                >
                  Select Files
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">Uploaded files will not be shared.</p>
              <p className="text-xs text-gray-300 mt-2">Selected files: {files.map(f => f.name).join(', ')}</p>
              <AnimatedButton
                type="submit"
                className="w-full mt-6 tertiary_bg_color border-[.1rem] border-gray-100 text-gray-200 font-semibold py-2 px-4 rounded-lg text-sm"
              >
                Submit Request for Quote
              </AnimatedButton>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
