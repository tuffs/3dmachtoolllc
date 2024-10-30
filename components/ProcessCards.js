const ProcessCard = ({ heading, content, imageUrl }) => (
  <div className="relative rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col h-full group border-[0.09rem] border-gray-700 hover:border-gray-500">
    <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-600 z-0"></div>
    <div className="relative z-20">
      <img src={imageUrl} alt={heading} className="w-full h-48 object-cover" />
    </div>
    <div className="relative z-10 p-6 flex flex-col h-full">
      <h3 className="text-2xl font-bold mb-1 text-gray-300 transition-colors duration-300 group-hover:text-gray-100">
        {heading}
      </h3>
      <p className="text-sm text-gray-300 transition-colors duration-300 group-hover:text-gray-200 flex-grow">
        {content}
      </p>
    </div>
  </div>
);

const ProcessCards = ({ processes }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {processes.map((process) => (
      <div key={process.id}>
        <ProcessCard
          heading={process.heading}
          content={process.content}
          imageUrl={process.imageUrl}
        />
      </div>
    ))}
  </div>
);

export default ProcessCards;