'use client';

import React, { useState, useRef } from 'react';
import { FiUploadCloud, FiFileText, FiBox } from 'react-icons/fi';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { createNewProduct } from '@/actions/createNewProduct';

const SuccessMessage = () => {
  return (
    <div
      className={`mt-8 mb-12 mx-auto p-12 bg-gray-700 text-white rounded-xl w-[90%] md:w-[400px] transition-opacity duration-1000`}
    >
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-3" style={{ textShadow: "1px 1px rgba(255,255,255,.25)" }}>✅</h1>
      <h2 className="text-2xl text-gray-200 font-bold text-center" style={{ textShadow: "1px 1px rgba(0,0,0,.4)" }}>Product Created Successfully!</h2>
      <p className="text-center text-gray-300" style={{ textShadow: "1px 1px rgba(0,0,0,.24)" }}>Your new product has been added to the database and images have been uploaded.</p>
    </div>
  );
}

export default function CreateNewProduct() {
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
      formData.append(`productImages`, file);
    });

    try {
      const result = await createNewProduct(formData);
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
      {state.error && (
        <div className="mb-4 p-4 bg-red-500 text-white rounded">
          {state.error}
        </div>
      )}
      {state.success && state.formSubmitted ? (
        <SuccessMessage />
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Information Card */}
            <div className="secondary_bg_color p-6 rounded-lg border-[.1rem] border-gray-100 shadow-md">
              <h2 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
                <FiBox className="mr-2" /> Product Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Product Name</label>
                  <input type="text" id="name" name="name" className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg" placeholder="Enter product name" required />
                </div>
                <div>
                  <label htmlFor="modelNumber" className="block text-sm font-medium text-gray-300 mb-1">Model Number</label>
                  <input type="text" id="modelNumber" name="modelNumber" className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg" placeholder="Enter model number" required />
                </div>
                <div>
                  <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-300 mb-1">Short Description</label>
                  <input type="text" id="shortDescription" name="shortDescription" className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg" placeholder="Enter short description" required />
                </div>
                <div>
                  <label htmlFor="quantityOnHand" className="block text-sm font-medium text-gray-300 mb-1">Quantity on Hand</label>
                  <input type="number" id="quantityOnHand" name="quantityOnHand" min="0" className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg" placeholder="Enter quantity" required />
                </div>
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-300 mb-1">Price</label>
                  <input type="number" id="price" name="price" step="0.01" min="0" className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg" placeholder="Enter price" required />
                </div>
                <div>
                  <label htmlFor="tags" className="block text-sm font-medium text-gray-300 mb-1">Tags (comma separated)</label>
                  <input type="text" id="tags" name="tags" className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg" placeholder="Enter tags" />
                </div>
              </div>
            </div>

            {/* Product Description Card */}
            <div className="secondary_bg_color p-6 rounded-lg border-[.1rem] border-gray-100 shadow-md">
              <h2 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
                <FiFileText className="mr-2" /> Product Description
              </h2>
              <textarea
                id="description"
                name="description"
                className="w-full h-32 p-2 text-sm text-gray-300 border border-gray-100 tertiary_bg_color rounded-lg resize-none mb-4"
                placeholder="Enter detailed product description..."
                required
              ></textarea>
              <p className="text-xs text-gray-300 mb-4">Provide a detailed description of the product, including its features, specifications, and any other relevant information.</p>

              {/* File Upload Section */}
              <h2 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
                <FiUploadCloud className="mr-2" /> Upload Product Images
              </h2>
              <div className="tertiary_bg_color border-2 border-dashed border-gray-400 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-300 mb-2">Drag and drop files here or click to upload</p>
                <input
                  type="file"
                  className="hidden"
                  id="productImages"
                  name="productImages"
                  multiple
                  accept=".png,.jpg,.jpeg,.pdf"
                  onChange={handleFileChange}
                />
                <button
                  type="button"
                  onClick={() => document.getElementById('productImages').click()}
                  className="w-full mt-6 tertiary_bg_color border-[.1rem] border-gray-100 text-gray-200 font-semibold py-2 px-4 rounded-lg text-sm"
                >
                  Select Files
                </button>
              </div>
              <p className="text-xs text-gray-300 mt-2">Selected files: {files.map(f => f.name).join(', ')}</p>
              <p className="text-xs text-gray-500 mt-2">Allowed file types: .png, .jpg, .jpeg, .pdf</p>
              <AnimatedButton
                type="submit"
                className="w-full mt-6 tertiary_bg_color border-[.1rem] border-gray-100 text-gray-200 font-semibold py-2 px-4 rounded-lg text-sm"
              >
                Create New Product
              </AnimatedButton>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
