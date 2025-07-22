import Hero from '@/components/Hero';
import CartCheckoutClient from '@/components/CartCheckoutClient';
import CartTable from '@/components/CartTable';
import { cookies } from 'next/headers';
import { getCart } from '@/lib/cartUtils';
import { getProductDetails } from '@/actions/getProductDetails';
import { FaShoppingBasket } from 'react-icons/fa';
import EmptyShoppingCart from '@/components/EmptyShoppingCart';

export default async function ShoppingCartPage() {
  const cookieStore = cookies();
  const cartCookie = cookieStore.get('3dmandt_cart')?.value;
  const cart = cartCookie ? getCart(cartCookie) : {};

  // Filter out products with zero quantity
  const validProducts = Object.entries(cart)
    .filter(([id, quantity]) => quantity > 0)
    .map(([id, quantity]) => Number(id));

  let products = [];
  let pre_tax_subtotal = 0;

  if (validProducts.length > 0) {
    products = await getProductDetails(validProducts);
    pre_tax_subtotal = products.reduce((sum, product) => {
      const untaxed_quantity = cart[product.id] || 0;
      return sum + product.price * untaxed_quantity;
    }, 0);
  }

  // Show empty cart message when no products exist
  if (validProducts.length <= 0) {
    return <EmptyShoppingCart />;
  }

  return (
    <div className="my-24">
      <Hero />
      <div className="mt-24 text-white pt-0 p-8">
        <section className="mb-3">
          <h1 className="text-4xl font-bold text-center flex items-center justify-center">
            <FaShoppingBasket className="inline-block mr-4" /> Shopping Cart
          </h1>
        </section>
      </div>
      <CartCheckoutClient pre_tax_subtotal={pre_tax_subtotal} initialCart={cart} initialProducts={products}>
        <CartTable products={products} cart={cart} pre_tax_subtotal={pre_tax_subtotal} />
      </CartCheckoutClient>
    </div>
  );
}