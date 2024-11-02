import Hero from '@/components/Hero';

export default function PortfolioPage() {
  return (
    <>
      <div className="my-24">
        <Hero />
        <div className="mt-24 text-white pt-0 p-8">
          <section className="mb-12">
            <h1 className="text-4xl font-bold text-center">
              Our Recent Work
            </h1>
          </section>

          <section>
            <p className="text-gray-300">
              Please find our most recent work below. Press on an image and project title for more information. All of the displayed parts are for sale. Each product has a link to it's the product details page where you can find all applicable information. Should you need more information do not hesitate to <a href="/contact-us">contact us</a> for additional information regaring fitment, use, and other inquries.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}