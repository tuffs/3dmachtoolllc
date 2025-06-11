'use client';

import React from "react";
import { FaCreditCard } from "react-icons/fa";

const CheckoutButton = () => (
  <div className="flex justify-center mt-10">
    <button
      onClick={() => (window.location.href = "#!")}
      className="flex items-center gap-1 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-md shadow-lg transition-colors duration-200"
      type="button"
    >
      <FaCreditCard className="text-lg" />
      Proceed to Checkout
    </button>
  </div>
);

export default CheckoutButton;