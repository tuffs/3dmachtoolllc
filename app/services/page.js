import Hero from '@/components/Hero';

export default function ServicesPage() {
  return (
    <>
      <div className="my-24" />
      <Hero />
      <div className="mt-24 text-gray-400 pt-0 p-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-center">Services</h1>
        </section>
        
        <section className="my-12">
          <div className="secondary_bg_color p-6 rounded-lg border-[.1rem] border-gray-100 shadow-md">
            <h2 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
              Machining Tools
            </h2>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>HAAS TL-1 CNC:</strong> 10-HP, 3,000 RPM Spindle Lathe with 4-Station Turret & Latest Controls
                <ul className="list-disc pl-6 mt-2">
                  <li>Samchully FTC-190 7" Chuck with 2.3125" Bore</li>
                </ul>
              </li>
              <li>
                <strong>JET JDP-20EVS Drill Press:</strong> 2-HP, 20" VFD, 65-2,000 RPM with H-D 12" X-Axis & 8" Y-Axis Fine Adjust Milling Table
                <ul className="list-disc pl-6 mt-2">
                  <li>Precision up to 0.001" Increments & 6" H-D Vice</li>
                </ul>
              </li>
              <li>
                <strong>VERTEX Super-8 Rotary Indexer:</strong> Horizontal & Vertical Indexer with 8" Chuck, 10" Face Plate
                <ul className="list-disc pl-6 mt-2">
                  <li>2, 3, 4, 6, 8, 12 & 24 Dividing Plates, 90:1 Worm Gear for 10 Secs Accuracy</li>
                </ul>
              </li>
              <li>
                <strong>Cloudray 30-Watt Q-Pulsed Fiber Laser:</strong> Integral Rotary Head, Frequency 30–60 kHz, Max Speed 2,000mm/sec
              </li>
            </ul>
            <p className="mt-4">
              Our shop combines advanced skills and systems to extend the capabilities of these tools, enabling precision machining and manufacturing.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="secondary_bg_color p-6 rounded-lg border-[.1rem] border-gray-100 shadow-md">
            <h2 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
              Capabilities with the HAAS TL-1 Lathe
            </h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Precision Turning, Profiling & Facing:</h4>
                <ul className="list-disc pl-6">
                  <li>Machining high-precision cylindrical parts with tight tolerances (e.g., shafts, bushings, hubs).</li>
                  <li>Handles work pieces up to 6" Dia. x 30" Lg.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Integral Coolant System:</h4>
                <p>Efficient cooling & lubrication for inserts & material during machining.</p>
              </div>
              <div>
                <h4 className="font-semibold">Advanced Threading:</h4>
                <ul className="list-disc pl-6">
                  <li>Complex thread patterns, including non-standard and multi-start threads (SAE Inch & Metric).</li>
                  <li>Rigid Tapping Option for precise in-line tapping.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">CNC Automation:</h4>
                <p>High-level CNC programming for intricate profile cutting, grooving, and threading.</p>
              </div>
              <div>
                <h4 className="font-semibold">Complex Tapering and Profiling:</h4>
                <p>Multi-axis machining for complex profiles, tapers, and contours.</p>
              </div>
              <div>
                <h4 className="font-semibold">Live Tooling:</h4>
                <p>Allows milling, drilling, and other operations in one setup, minimizing machine transitions.</p>
              </div>
              <div>
                <h4 className="font-semibold">Special Materials:</h4>
                <p>Capable of machining advanced materials like titanium and specialty alloys.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="secondary_bg_color p-6 rounded-lg border-[.1rem] border-gray-100 shadow-md">
            <h2 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
              Capabilities with the JET JDP-20EVS-110 Drill Press
            </h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Precision Drilling:</h4>
                <ul className="list-disc pl-6">
                  <li>Electronic variable speeds (65 to 2000 RPM) for materials like plastics, composites, aluminum, and steel.</li>
                  <li>Exclusive use of Precision Collets to reduce tool run-out.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Integral Coolant System:</h4>
                <p>Optimal cooling and lubrication for cutting tools and material.</p>
              </div>
              <div>
                <h4 className="font-semibold">Boring and Reaming:</h4>
                <p>Accurate boring & reaming capabilities.</p>
              </div>
              <div>
                <h4 className="font-semibold">Tapping:</h4>
                <p>Variable speeds and reversible drive for threaded holes in diverse materials.</p>
              </div>
              <div>
                <h4 className="font-semibold">Workpiece Fixturing Systems:</h4>
                <p>Custom clamps, jigs, and fixtures expand part complexity and production options.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="secondary_bg_color p-6 rounded-lg border-[.1rem] border-gray-100 shadow-md">
            <h2 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
              Capabilities with the Cloudray Laser Etcher
            </h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Precision Laser Marking and Etching:</h4>
                <p>Engraving on metals, plastics, etc., for labeling, serial numbers, and designs.</p>
              </div>
              <div>
                <h4 className="font-semibold">Cutting Thin Materials:</h4>
                <p>Cuts materials like thin plastics* and metals for custom panels, templates, and parts.</p>
              </div>
              <div>
                <h4 className="font-semibold">Custom Part Identification and Decoration:</h4>
                <p>Ideal for branding, identification, and intricate design work.</p>
              </div>
            </div>
            <p className="mt-4 italic">*Note: We do not cut or etch materials that release toxic fumes.</p>
          </div>
        </section>

        <section className="mb-12">
          <div className="secondary_bg_color p-6 rounded-lg border-[.1rem] border-gray-100 shadow-md">
            <h2 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
              Extended Capabilities
            </h2>
          
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Automation and Tool Libraries:</h4>
                <p>Advanced CNC programming reduces downtime and streamlines multi-part production.</p>
              </div>
              <div>
                <h4 className="font-semibold">Collaborative Workflows:</h4>
                <p>CAD/CAM software (SolidWorks, FEA simulation, BobCAD-CAM) optimizes workflow and reduces errors.</p>
              </div>
              <div>
                <h4 className="font-semibold">Custom Fixturing:</h4>
                <p>Custom fixtures and jigs enable handling of unconventional parts, enhancing flexibility.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="secondary_bg_color p-6 rounded-lg border-[.1rem] border-gray-100 shadow-md">
            <h2 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
              Comprehensive Production Capabilities
            </h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Prototyping and One-Offs:</h4>
                <p>Perfect for complex prototypes and custom parts with intricate machining needs.</p>
              </div>
              <div>
                <h4 className="font-semibold">Small to Medium Production Runs:</h4>
                <p>Efficiently handles production runs with machining and marking requirements.</p>
              </div>
              <div>
                <h4 className="font-semibold">Customization and Finishing:</h4>
                <p>Laser etcher adds finishing touches for industrial and consumer products.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}