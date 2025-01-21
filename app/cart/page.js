import Hero from '@/components/Hero';

export default function ShoppingCartPage() {
  return (
    <>
      <div className="my-24">
        <Hero />
        <div className="mt-24 text-white pt-0 p-8">
          <section className="mb-12">
            <h1 className="text-4xl font-bold text-center">
              My Shopping Cart
            </h1>
          </section>
        </div>
      </div>
    </>
  );
}