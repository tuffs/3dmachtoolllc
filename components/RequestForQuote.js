import React from 'react';
import { FiUploadCloud, FiFileText, FiUser, FiBox, FiClock, FiTool, FiMaximize } from 'react-icons/fi';

export default function RequestForQuote() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-200 mb-6">Request for Quote</h1>
      <p className="text-gray-200 mb-6">
        Our team of experts has developed a streamlined process to provide you with a quotation for your projects. Please provide us with the following information and we will get back to you as soon as possible. You may <a href="/contact-us" className="underline hover:text-gray-300">contact us</a> directly if you have any questions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* File Upload Card */}
        <div className="bg-gray-900 p-6 rounded-lg border-[.1rem] border-gray-100 shadow-md">
          <h2 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
            <FiUploadCloud className="mr-2" /> Upload Design Files
          </h2>
          <div className="bg-gray-950 border-2 border-dashed border-gray-400 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-300 mb-2">Drag and drop files here or click to upload</p>
            <input type="file" className="hidden" id="fileUpload" multiple />
            <label htmlFor="fileUpload" className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg cursor-pointer text-sm">
              Select Files
            </label>
          </div>
          <p className="text-xs text-gray-500 mt-2">Uploaded files will not be shared.</p>
        </div>

        {/* Project Description Card */}
        <div className="bg-gray-900 p-6 rounded-lg border-[.1rem] border-gray-100 shadow-md">
          <h2 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
            <FiFileText className="mr-2" /> Project Description
          </h2>
          <textarea
            className="w-full h-32 p-2 text-sm text-gray-300 border border-gray-100 bg-gray-950 rounded-lg resize-none mb-4"
            placeholder="Describe your project requirements or additional requests..."
          ></textarea>
          <p className="text-xs text-gray-300 mb-4">Our team will review your requirements and provide a tailored quote based on your specific needs.</p>
          <div className="space-y-4">
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-300 mb-1">Desired Quantity</label>
              <input type="number" id="quantity" min="1" className="w-full p-2 text-sm bg-gray-950 text-gray-300 border border-gray-300 rounded-lg" placeholder="Enter quantity" />
            </div>
            <div>
              <label htmlFor="leadTime" className="block text-sm font-medium text-gray-300 mb-1">Lead Time in Weeks</label>
              <input type="text" id="leadTime" className="w-full p-2 text-sm bg-gray-950 text-gray-300 border border-gray-300 rounded-lg" placeholder="Enter lead time" />
            </div>
            <div>
              <label htmlFor="material" className="block text-sm font-medium text-gray-300 mb-1">Material</label>
              <input type="text" id="material" className="w-full p-2 text-sm bg-gray-950 text-gray-300 border border-gray-300 rounded-lg" placeholder="Enter material" />
            </div>
            <div>
              <label htmlFor="unitOfMeasurement" className="block text-sm font-medium text-gray-300 mb-1">Unit Of Measurement - Inches " or Millimeters mm.</label>
              <input type="text" id="unitOfMeasurement" className="w-full p-2 text-sm bg-gray-950 text-gray-300 border border-gray-300 rounded-lg" placeholder="Enter Unit of Measurement" />
            </div>
            <div>
              <label htmlFor="tolerance" className="block text-sm font-medium text-gray-300 mb-1">Project Tolerance by Material</label>
              <input type="text" id="tolerance" className="w-full p-2 text-sm bg-gray-950 text-gray-300 border border-gray-300 rounded-lg" placeholder="Enter tolerance" />
            </div>
          </div>
        </div>

        {/* Contact Information Card */}
        <div className="bg-gray-900 p-6 rounded-lg border-[.1rem] border-gray-100 shadow-md">
          <h2 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
            <FiUser className="mr-2" /> Contact Information
          </h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input type="text" id="name" className="w-full p-2 text-sm bg-gray-950 text-gray-300 border border-gray-300 rounded-lg" placeholder="Enter your name" />
            </div>
            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-gray-300 mb-1">Business Name</label>
              <input type="text" id="businessName" className="w-full p-2 text-sm bg-gray-950 text-gray-300 border border-gray-300 rounded-lg" placeholder="Enter your business name" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
              <input type="tel" id="phone" className="w-full p-2 text-sm bg-gray-950 text-gray-300 border border-gray-300 rounded-lg" placeholder="Enter your phone number" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
              <input type="email" id="email" className="w-full p-2 text-sm bg-gray-950 text-gray-300 border border-gray-300 rounded-lg" placeholder="Enter your email address" />
            </div>
          </div>
          <button className="w-full mt-6 bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg text-sm">
            Submit Request for Quote
          </button>
        </div>
      </div>
    </div>
  );
}