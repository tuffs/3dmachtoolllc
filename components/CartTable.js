'use client';

import Link from 'next/link';
import { updateCartItem, removeFromCart } from '@/lib/cartUtils';

export default function CartTable({ products, cart, pre_tax_subtotal, onCartUpdate, isLoadingProducts = true }) {

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
    if (onCartUpdate) {
      onCartUpdate();
    }
  }

  const handleUpdateQuantity = (productId, quantity) => {
    updateCartItem(productId, quantity);
    if (onCartUpdate) {
      onCartUpdate();
    }
  }

  const handleDecrementItem = (productId) => {
    const quantity = cart[productId] || 0;
    if (quantity > 0) {
      handleUpdateQuantity(productId, quantity - 1);
    }
  }

  const handleIncrementItem = (productId) => {
    const quantity = cart[productId] || 0;
    handleUpdateQuantity(productId, quantity + 1);
  }

  return (
    <div className="w-full bg-inherit">
      <div className="w-full flex justify-center bg-inherit">
        <div className="w-full md:max-w-3xl">
          <table className="w-full rounded-xl overflow-hidden shadow-lg border border-gray-800">
            <thead>
              <tr className="bg-inherit text-white">
                <th className="p-1 text-md text-left font-semibold tracking-wide border-b border-gray-700">ITEM</th>
                <th className="p-1 text-md text-center font-semibold tracking-wide border-b border-gray-700">QTY</th>
                <th className="p-1 text-md text-right font-semibold tracking-wide border-b border-gray-700">PRICE&nbsp;&nbsp;&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="3"></td>
              </tr>
              {isLoadingProducts ? (
                <tr>
                  <td colSpan={3} className="p-8 text-center text-gray-400">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-400"></div>
                      <span>Loading cart items...</span>
                    </div>
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product.id} className="hover:bg-[#101010] transition-colors">
                    <td className="p-5 border-b border-gray-800 align-top">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <Link
                            href={`/products/${product.id}`}
                            className="text-white text-sm hover:underline transition-colors"
                          >
                            {product.name}
                          </Link>
                        </div>
                      </div>
                      <div className="item_removal mt-3">
                        <button
                          className="flex items-center justify-center hover:underline"
                          onClick={() => handleRemoveItem(product.id)}
                        >
                          <div className="text-white text-xs">
                            <div className="flex-col">
                              <small>remove</small>
                            </div>
                          </div>
                        </button>
                      </div>
                    </td>
                    <td className="p-5 text-right border-b border-gray-800 align-top">
                      <div className="flex items-center justify-center">
                        <div className="flex mb-2">
                          <button
                            type="button"
                            className="px-2 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded-l border border-gray-600 transition-colors"
                            onClick={() => handleDecrementItem(product.id, cart[product.id])}
                          >
                            -
                          </button>
                          <input
                            id={`quantity_cell_${product.id}`}
                            name={`${product.id}_quantity`}
                            type="number"
                            className="text-center bg-gray-800 text-sm text-white border-t border-b border-gray-600 focus:outline-none"
                            style={{ width: '45px', paddingLeft: '10px' }}
                            value={cart[product.id]}
                            readOnly
                          />
                          <button
                            type="button"
                            className="px-2 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded-r border border-gray-600 transition-colors"
                            onClick={() => handleIncrementItem(product.id, cart[product.id])}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="p-5 text-right border-b border-gray-800 align-top">
                      ${Number(product.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>
                  </tr>
                ))
              )}
              <tr>
                <td></td>
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