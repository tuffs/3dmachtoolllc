import Link from 'next/link';

export default function ProductCard({ product }) {
  const { id, name, imageUrls, shortDescription } = product;

  return (
    <>
      <Link
        href={`/products/${id}`}
        key={id}
        className="block bg-inherit border-[.04rem] border-gray-200 p-4 rounded-lg shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <div>
          <h2 className="text-xl font-semibold mb-2">{name}</h2>
          {imageUrls && imageUrls.length > 0 && (
            <img
              src={imageUrls[0]}
              alt={`${name} - First Image`}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          )}
          <p className="text-gray-400 mb-4">{shortDescription}</p>
          <span className="inline-block border-[.04rem] border-gray-200 p-4 text-white py-2 px-4 rounded pointer-events-none transition-transform hover:scale-105">
            Read More
          </span>
        </div>
      </Link>
    </>
  );
}