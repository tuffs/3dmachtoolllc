import Hero from '@/components/Hero';

export default function ProductsPage() {
  return (
    <>
      <div className="my-24">
        <Hero />
        <div className="mt-24 text-white pt-0 p-8">
          <section className="mb-12">
            <h1 className="text-4xl font-bold text-center">
              Products
            </h1>
          </section>
        </div>
      </div>
    </>
  );
}