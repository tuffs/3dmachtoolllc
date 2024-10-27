import Hero from '@/components/Hero';
import Separator from '@/components/global/Separator';
import RequestForQuote from '@/components/RequestForQuote';

export default function RequestForQuotePage() {
  return (
    <>
      <div className="mt-24 mb-0">
        <Hero />
        <div className="mt-24 text-white pt-0 p-8">
          <section className="mb-12">
            <h1 className="text-4xl font-bold text-center">
              Request for Quote
            </h1>
          </section>
        </div>
      </div>
      <RequestForQuote />
    </>
  );
}