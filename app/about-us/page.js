import Hero from '@/components/Hero';
import AnimatedNavLink from '@/components/ui/AnimatedNavLink';

export default function AboutUsPage() {
  return (
    <>
      <div className="my-24" />
      <Hero />
      <div className="mt-24 mb-24 mx-12 md:mx-32 lg:mx-64 text-gray-300">
        <h1 className="text-4xl font-bold text-center">About Us</h1>
        <div className="my-12">
          <p className="mb-6">
            Thank you for your desire to learn more about 3D Machine and Tool, we are a family-owned business with over 65 years in the fields of precision engineering, custom metal fabrication, inventions, and design. Our journey began with a vision to provide quality, innovation, and customer satisfaction in all our design and fabrication projects.
          </p>
          

          <div className="my-12">
            <h3 className="text-2xl font-bold mb-2 text-gray-200">OUR LEGACY</h3>
            <p className="mb-6">
              Founded on the principles of integrity, craftsmanship, and excellence, 3D Machine and Tool is a trusted partner for delivering optimal metal fabrication and tooling solutions. Over the years, we have honed our expertise and embraced cutting-edge technology to meet the evolving needs of our valued clients.
            </p>
          </div>

          <div className="my-12">
            <h3 className="text-2xl font-bold mb-2 text-gray-200">EXCELLENCE AND PRECISION FROM DESIGN TO FABRICATION AND MANUFACTURING</h3>
            <p className="mb-6">
              Our specialized design team boasts decades of experience, making us pioneers in the industry. We take pride in our ability to turn your concepts into reality, using state-of-the-art equipment and our profound knowledge. At the heart of our operation is a Haas lathe, drill press, and laser engraving machinery, enabling us to create custom metal fabricated parts that meet the highest standards of precision and quality.
            </p>
          </div>

          <div className="my-12">
            <h3 className="text-2xl font-bold mb-2 text-gray-200">INDUSTRIES SERVED</h3>
            <p className="mb-2">
              We have had the privilege of serving a diverse range of industries, including:
            </p>
            <ul className="mb-6 ml-3 list-disc">
              <li className="mb-2">
                <b>Automation Processes:</b> The bulk of our background is in the world of automation. We excel in the ability to create products and tooling which eliminate redundancy of operations to streamline your business' time and labor intense tasks.
              </li>
              <li className="mb-2">
                <b>Automotive Production:</b> Our precision-crafted components play a pivotal role in the automotive production process. From engine parts to intricate assemblies, we provide solutions that keep the wheels of the industry turning.
              </li>
              <li className="mb-2">
                <b>Tractor Equipment Production:</b> Agriculture demands robust and reliable equipment. We take pride in contributing to the farming community by designing and manufacturing parts that stand the test of time.
              </li>
              <li className="mb-2">
                <b>Electronics Production, Assembly Lines and Manufacturing Facilities:</b> Over several decades our Mechanical Engineer has designed and built multiple assembly lines for the large-scale production of Televisions (CRT, Plasma, and LCD), Household Microwaves, and Solar Panels for global distribution and sale. <i>Chances are high that you have or presently use household appliances daily which we have had a direct impact in the automated creation process.</i>
              </li>
              <li className="mb-2">
                <b>Vertical Reciprocating Conveyors (VRCs):</b> We remain at the forefront of creating components that keep materials moving efficiently in vertical reciprocating conveyor systems, ensuring smooth and uninterrupted operations.
              </li>
              <li className="mb-2">
                <b>Custom Tooling and Fixture Solutions:</b> We provide custom tooling solutions which are tailor-made to enhance the assembly and automation process for product build output. We understand that efficiency and precision are the cornerstones to high output manufacturing and we design, develop and manufacture the tools and fixtures which make that happen.
              </li>
            </ul>
          </div>

          <div className="my-12">
            <h3 className="text-2xl font-bold mb-2 text-gray-200">OUR COMMITMENT</h3>
            <p className="mb-3">
              At 3D Machine and Tool, our commitment to our customers is unwavering. We believe in fostering long-lasting partnerships built on trust and exceptional service. Our team is dedicated to understanding your unique needs and delivering solutions that exceed your expectations.
            </p>
            <p className="mb-6">
              In addition to our service commitments we have a policy of domestic first sourcing. Meaning, we believe in supporting local businesses and the American economy. In all of our projects we strive to source materials, services, and technology that comes from workers and businesses within the United States. We believe that by supporting our local economy we are able to provide the best quality products and services to our customers.
            </p>
          </div>

          <div className="my-12">
            <h3 className="text-2xl font-bold mb-2 text-gray-200">WHY CHOOSE US</h3>
            <p>
              At 3D Machine and Tool, our commitment to our customers is unwavering. We believe in fostering long-lasting partnerships built on trust and exceptional service. Our team is dedicated to understanding your unique needs and delivering solutions that exceed your expectations.
            </p>
            <ul className="mb-6 ml-3 list-disc">
              <li className="mb-2">
                <b>Legacy Experience:</b> With over six decades of experience, we have an in-depth understanding of the intricacies of metal fabrication and tooling.
              </li>
              <li className="mb-2">
                <b>Quality and Precision:</b> Our commitment to quality is second to none. Every component we produce undergoes rigorous testing to ensure it meets our high standards.
              </li>
              <li className="mb-2">
                <b>Cutting Edge Innovation:</b> We embrace innovation and stay at the forefront of technology, allowing us to provide cutting-edge solutions to our clients.
              </li>
              <li className="mb-2">
                <b>Customer-Centric Approach:</b> Your satisfaction is our top priority. We work closely with you to tailor our services to your extremely specific requirements. Without our dedication to precision and quality we would not be able to provide the level of service we do.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}