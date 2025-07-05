'use client';

import { FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import AnimatedButton from './ui/AnimatedButton';

export default function CartTable({ products, cart, pre_tax_subtotal }) {

  const handleRemoveItem = (productId) => {
    return (e) => {
      e.preventDefault();
      // Dispatch an action to remove the item from the cart
      // Assuming you have a function to handle this, e.g., removeItemFromCart(productId)
      // removeItemFromCart(productId);
      console.log(`Removing item with ID: ${productId}`);
    };
  }

  return (
    <div className="w-full bg-inherit">
      <div className="w-full flex justify-center bg-inherit p-1">
        <div className="w-full max-w-3xl">
          <table className="w-full rounded-xl overflow-hidden shadow-lg border border-gray-800">
            <thead>
              <tr className="bg-inherit text-white">
                <th className="p-5 text-left font-semibold tracking-wide border-b border-gray-700">ITEM</th>
                <th className="p-5 text-left font-semibold tracking-wide border-b border-gray-700"></th>
                <th className="p-5 text-right font-semibold tracking-wide border-b border-gray-700" width="33%">QTY</th>
                <th className="p-5 text-right font-semibold tracking-wide border-b border-gray-700">PRICE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2"></td>
                <td className="py-2"></td>
                <td className="py-2"></td>
                <td className="py-2"></td>
              </tr>
              {products.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-gray-400">
                    Your cart is empty.
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product.id} className="hover:bg-[#101010] transition-colors">
                    <td className="p-5 border-b border-gray-800">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <Link
                            href={`/products/${product.id}`}
                            className="text-white hover:underline transition-colors"
                          >
                            {product.name}
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td className="p-5 border-b border-gray-800">
                      <div className="flex flex-col">
                        <a
                          href="#!"
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <button
                            className="flex items-center justify-center bg-red-500 p-[.415rem] h-[1.65rem] rounded hover:bg-red-600 transition-colors"
                            onClick={handleRemoveItem(product.id)}
                          >
                            <span className="text-white text-xs">remove</span>
                          </button>
                        </a>
                      </div>
                    </td>
                    <td className="p-5 text-right border-b border-gray-800">{cart[product.id]}</td>
                    <td className="p-5 text-right border-b border-gray-800">
                      ${Number(product.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>
                  </tr>
                ))
              )}
              <tr>
                <td colSpan="2"></td>
                <td className="p-5 text-right font-bold text-gray-300">PRE TAX SUBTOTAL</td>
                <td className="p-5 text-right font-bold text-white">
                  ${pre_tax_subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-md my-3 mx-auto text-center text-white">
            <i>
              Tax Exemption Certificates in PDF format are honored. This must be provided at the time of sale.
            </i>
          </p>
        </div>
      </div>
    </div>
  );
}