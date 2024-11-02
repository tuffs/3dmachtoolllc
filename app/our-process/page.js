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
            <p className="text-gray-300 mb-12">You can expect for the following process to occur to ensure that your project is properly executed to your precise standards. During the first stage, we will request additional documentation or suggest additional engineering services depending on your requirements. A clear set of milestones are provided for each step of the manufacturing process so that our clients know what to expect. We reach out continually thoughout the project to ensure our client's are aware of their projects status, provided the ability to give input where needed, and are alerted to any important changes during the production process.</p>
            <ProcessCards processes={processes} />
          </section>
        </div>
      </div>
    </>
  );
}