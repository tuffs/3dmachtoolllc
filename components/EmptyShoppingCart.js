import Hero from '@/components/Hero';
import { FaShoppingBasket } from 'react-icons/fa';

export default function EmptyShoppingCart() {
  return (
    <>
      <div className="my-24">
        <Hero />
        <div className="mt-24 text-white pt-0 p-8">
          <section className="mb-3">
            <h1 className="text-4xl font-bold text-center flex items-center justify-center"><FaShoppingBasket className="inline-block mr-4" /> Your Shopping Cart Is Empty!</h1>
            <p className="text-center mt-4">
              Let's fix that, <a href="/products" className="underline highlight">check out our products for sale here.</a>
            </p>
          </section>
        </div>
      </div>
    </>
  );
}