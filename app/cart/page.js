import Hero from '@/components/Hero';
import CartCheckoutClient from '@/components/CartCheckoutClient';
import { cookies } from 'next/headers';
import { getCart } from '@/lib/cartUtils';
import { getProductDetails } from '@/actions/getProductDetails';

export default async function ShoppingCartPage() {
  const cookieStore = cookies();
  const cartCookie = cookieStore.get('3dmandt_cart')?.value;
  const cart = cartCookie ? getCart(cartCookie) : {};

  const productIds = Object.keys(cart).map(id => Number(id));
  let products = [];
  let pre_tax_subtotal = 0;

  if (productIds.length > 0) {
    products = await getProductDetails(productIds);
    pre_tax_subtotal = products.reduce((sum, product) => {
      const qty = cart[product.id] || 0;
      return sum + product.price * qty;
    }, 0);
  }

  console.log('Pre Tax Subtotal: ', pre_tax_subtotal);

  // Render the cart table as a variable
  const cartTable = (
    <div className="w-full bg-inherit">
      <div className="w-full flex justify-center bg-inherit p-1">
        <div className="w-full max-w-3xl">
          <table className="w-full rounded-xl overflow-hidden shadow-lg bg-gray-950 border border-gray-800">
            <thead>
              <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                <th className="p-5 text-left font-semibold tracking-wide border-b border-gray-700">ITEM</th>
                <th className="p-5 text-right font-semibold tracking-wide border-b border-gray-700">QTY</th>
                <th className="p-5 text-right font-semibold tracking-wide border-b border-gray-700">PRICE</th>
                <th className="p-5 text-right font-semibold tracking-wide border-b border-gray-700">ACTION</th>
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
                products.map(product => (
                  <tr key={product.id} className="hover:bg-gray-900 transition-colors">
                    <td className="p-5 border-b border-gray-800">
                      <a href={`/products/${product.id}`} className="underline text-blue-400 hover:text-blue-300 transition-colors">
                        {product.name}
                      </a>
                    </td>
                    <td className="p-5 text-right border-b border-gray-800">{cart[product.id]}</td>
                    <td className="p-5 text-right border-b border-gray-800">
                      ${Number(product.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>
                    <td className="p-5 text-right text-xs border-b border-gray-800">
                      <a href="#!">remove</a>
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
              Business Tax Exemption certificates are honored, you will be able to utilize your certificate during the checkout process. You MUST provide a valid PDF certificate at the time of checkout.
            </i>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="my-24">
      <Hero />
      <div className="mt-24 text-white pt-0 p-8">
        <section className="mb-3">
          <h1 className="text-4xl font-bold text-center">
            Current Order
          </h1>
        </section>
      </div>
      <CartCheckoutClient pre_tax_subtotal={pre_tax_subtotal}>
        {cartTable}
      </CartCheckoutClient>
    </div>
  );
}