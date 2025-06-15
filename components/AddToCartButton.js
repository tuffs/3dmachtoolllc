'use client';

import { useState } from 'react';
import { addToCart } from '@/lib/cartUtils';

export default function AddToCartButton({ product }) {
  const [message, setMessage] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
    setMessage(`Product ${product.name} added to cart!`);
    setTimeout(() => setMessage(""), 3000);
  }

  return (
    <div className="ml-16 pl-48">
      <div className="mb-3">
        <p className="mb-2 ml-16">
          <small><small>QUANTITY</small></small>
        </p>
        <input
          type="number"
          className="input bg-inherit border border-gray-200 w-20 mb-4 p-2 ml-16"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          min="1"
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold py-1 px-5 rounded inline-block"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      {message && <p className="mt-2 text-green-500">{message}</p>}
    </div>
  );
}
