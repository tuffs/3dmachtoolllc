'use client';

import React from "react";
import { FaCreditCard } from "react-icons/fa";

const CheckoutButton = ({ onClick }) => (
  <div className="flex justify-center">
    <div
      className="flex items-center gap-1 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-md shadow-lg transition-colors duration-200"
      type="button"
      onClick={onClick}
    >
      <FaCreditCard className="text-lg" />
      Proceed to Checkout
    </div>
  </div>
);

export default CheckoutButton;