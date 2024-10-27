import Hero from '@/components/Hero';

export default function OurProcessPage() {
  return (
    <>
      <div className="my-24">
        <Hero />
        <div className="mt-24 text-white pt-0 p-8">
          <section className="mb-12">
            <h1 className="text-4xl font-bold text-center">
              Our Process for Precision<br/>
              <span className="text-gray-400 text-xl mt-0 pt-0">Manufacturing + Fabrication</span>
            </h1>
          </section>
        </div>
      </div>
    </>
  );
}