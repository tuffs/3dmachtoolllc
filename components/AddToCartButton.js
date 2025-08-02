'use client';

import { useState } from 'react';
import { addToCart, getCart } from '@/lib/cartUtils';
import { FaCheckCircle } from 'react-icons/fa';

export default function AddToCartButton({ product }) {
  const [message, setMessage] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const cart = getCart();

  // Check if there are any products in the cart with quantities > 0
  const cartLoaded = Object.values(cart).some(quantity => quantity > 0);

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
    setMessage(`Product ${product.name} added to cart!`);
    setTimeout(() => setMessage(""), 3000);
  }

  return (
    <div className="">
      <div className="mb-3">
        <p className="mb-2">
          <small><small>QUANTITY</small></small>
        </p>
        <input
          type="number"
          className="input bg-inherit border border-gray-200 w-20 mb-4 p-2"
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
      {message && (
        <p className="text-lg my-4 p-4 bg-green-600 text-white">
          <FaCheckCircle className='color-white inline-block mr-2 pb-1' /> {message}
        </p>
      )}
      {cartLoaded && (
        <div className="mt-4">
          <a href="/cart" className="underline text-gray-300">Proceed to Checkout</a>
        </div>
      )}
    </div>
  );
}
