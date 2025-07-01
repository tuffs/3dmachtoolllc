import { FaTimes } from 'react-icons/fa';
import Link from 'next/link';

export default function CartTable({ products, cart, pre_tax_subtotal }) {
  return (
    <div className="w-full bg-inherit">
      <div className="w-full flex justify-center bg-inherit p-1">
        <div className="w-full max-w-3xl">
          <table className="w-full rounded-xl overflow-hidden shadow-lg bg-gray-950 border border-gray-800">
            <thead>
              <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                <th className="p-5 text-left font-semibold tracking-wide border-b border-gray-700">ITEM</th>
                <th className="p-5 text-left font-semibold tracking-wide border-b border-gray-700"></th>
                <th className="p-5 text-right font-semibold tracking-wide border-b border-gray-700" width="33%">
                  QTY
                </th>
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
                  <tr key={product.id} className="hover:bg-gray-900 transition-colors">
                    <td className="p-5 border-b border-gray-800">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <Link
                            href={`/products/${product.id}`}
                            className="underline text-blue-400 hover:text-blue-300 transition-colors"
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
                          <div className="flex">
                            <FaTimes className="flex flex-col text-block block" />
                            <small className="flex flex-col pl-1 hover:underline">
                              <small>remove item</small>
                            </small>
                          </div>
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
                <td></td>
                <td className="p-5 text-right font-bold text-gray-300">PRE TAX SUBTOTAL</td>
                <td className="p-5 text-right font-bold text-white">
                  ${pre_tax_subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm my-3 mx-auto text-center text-white">
            <i>
              You may provide your Tax Exemption certificate during the checkout process next. You MUST provide a valid PDF
              certificate at the point of sale.
            </i>
          </p>
        </div>
      </div>
    </div>
  );
}