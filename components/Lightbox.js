'use client';

import { useState } from 'react';

export default function Lightbox({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Product Image ${index + 1}`}
            className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setSelectedImage(url)}
          />
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full p-4">
            <img
              src={selectedImage}
              alt="Enlarged product image"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
