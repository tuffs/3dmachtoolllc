import Hero from '@/components/Hero';
import CreateNewProduct from '@/components/CreateNewProduct';

export default function NewProductPage() {
  return (
    <>
      <div className="mt-24 mb-0">
        <Hero />
        <div className="mt-24 text-white pt-0 p-8">
          <section className="mb-12">
            <h1 className="text-4xl font-bold text-center">
              Create New Product
            </h1>
            <p className="text-gray-200 mb-6 mt-3 text-center">
              Create a new product by filling out the form below. Make sure to follow the guidelines for product images and information.
            </p>
          </section>
        </div>
      </div>
      <CreateNewProduct />
    </>
  );
}
