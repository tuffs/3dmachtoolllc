import Hero from '@/components/Hero';
import ProcessCards from '@/components/ProcessCards';

const processes = [
  {
    id: 1,
    heading: 'DESIGN DOCUMENTS',
    content: 'Project requirements, design documents, CAD, and 3D Model files are provided to us to analyzed to ensure feasibility of client\'s needs.',
    imageUrl: '/process/01_design_documents.webp',
  },
  {
    id: 2,
    heading: 'QUOTE',
    content: 'After we have received the requirements and they are properly analyzed, we provide a detailed quotation that includes the project scope, budget, and timeline for completion.',
    imageUrl: '/process/02_quote.webp',
  },
  {
    id: 3,
    heading: 'ACCEPTANCE',
    content: 'Upon project acceptance, we engage with our client and begin the project. Agreed upon payments are received, materials are procured, and the project is officially initiated.',
    imageUrl: '/process/03_acceptance.webp',
  },
  {
    id: 4,
    heading: 'PRODUCTION',
    content: 'Our team of experts begin the manufacturing process. This includes precision machining and assembly according to the design documents, requirements and agreed upon contract details.',
    imageUrl: '/process/04_production.webp',
  },
  {
    id: 5,
    heading: 'QUALITY CONTROL',
    content: 'The quality control and assurance process is conducted after completion of each part to ensure the project meets the tolerance and quality requirements. This includes a final inspection and testing.',
    imageUrl: '/process/05_quality_control.webp',
  },
  {
    id: 6,
    heading: 'SHIPMENT',
    content: 'Custom designed packaging is arranged for each completed manufacturing run to ensure that the your project is delivered safe and secure to your location. Photos and tracking information are always provided. ',
    imageUrl: '/process/06_shipment.webp',
  },
];


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

          <section className="bg-inherit p-6">
            <p className="text-gray-300 mb-12">You can expect for the following process to occur to ensure that your project is properly executed to your precise standards. During the first stage, we will request additional documentation or suggest additional engineering services depending on your requirements. A clear set of milestones are provided for each step of the manufacturing process so that our clients know what to expect. We reach out continually thoughout the project to ensure our client's are aware of their projects status, provided the ability to give input where needed, and are alerted to any important changes during the production process.</p>
            <ProcessCards processes={processes} />
          </section>
        </div>
      </div>
    </>
  );
}