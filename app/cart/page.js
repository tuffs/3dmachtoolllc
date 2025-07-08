import Hero from '@/components/Hero';
import CartCheckoutClient from '@/components/CartCheckoutClient';
import CartTable from '@/components/CartTable';
import { cookies } from 'next/headers';
import { getCart } from '@/lib/cartUtils';
import { getProductDetails } from '@/actions/getProductDetails';
import { FaShoppingBasket } from 'react-icons/fa';

export default async function ShoppingCartPage() {

  const cookieStore = cookies();
  const cartCookie = cookieStore.get('3dmandt_cart')?.value;
  const cart = cartCookie ? getCart(cartCookie) : {};

  const productIds = Object.keys(cart).map((id) => Number(id));
  let products = [];
  let pre_tax_subtotal = 0;

  if (productIds.length > 0) {
    products = await getProductDetails(productIds);
    pre_tax_subtotal = products.reduce((sum, product) => {
      const qty = cart[product.id] || 0;
      return sum + product.price * qty;
    }, 0);
  }

  console.log('Pre Tax Subtotal:', pre_tax_subtotal);

  return (
    <div className="my-24">
      <Hero />
      <div className="mt-24 text-white pt-0 p-8">
        <section className="mb-3">
          <h1 className="text-4xl font-bold text-center flex items-center justify-center"><FaShoppingBasket className="inline-block mr-4" /> Shopping Cart</h1>
        </section>
      </div>
      <CartCheckoutClient pre_tax_subtotal={pre_tax_subtotal}>
        <CartTable products={products} cart={cart} pre_tax_subtotal={pre_tax_subtotal} />
      </CartCheckoutClient>
    </div>
  );
}