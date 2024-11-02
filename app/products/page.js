import Hero from '@/components/Hero';
import AnimatedNavLink from '@/components/ui/AnimatedNavLink';

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

          <section className="w-[100%] text-center">
            <AnimatedNavLink
              link="/products/new"
              text="Create New Product"
              additionalClasses="!text-lg"
            />
          </section>
        </div>
      </div>
    </>
  );
}