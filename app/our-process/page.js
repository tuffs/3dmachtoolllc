import Hero from '@/components/Hero';
import ProcessCards from '@/components/ProcessCards';
import processes from '@/data/processes';

export default function OurProcessPage() {
  return (
    <>
      <div className="my-24">
        <Hero />
        <div className="mt-24 text-white pt-0 p-8">
          <section className="mb-12">
            <h1 className="text-4xl font-bold text-center">
              Our Process for Precision
            </h1>
            <h2 className="text-gray-400 text-xl mt-0 pt-0 text-center">Manufacturing + Fabrication</h2>
          </section>

          <section className="bg-inherit p-6">
            <p className="text-gray-300 mb-12">We follow a clear process to execute your project to exact standards: we assess requirements and suggest additions if needed, provide milestones for each step, and communicate regularly to update you, gather input, and alert on changes. Dive into the details below!</p>
            <ProcessCards processes={processes} />
          </section>
        </div>
      </div>
    </>
  );
}