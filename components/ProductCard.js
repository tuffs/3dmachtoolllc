import Link from "next/link"
import Image from "next/image"

export default function ProductCard({ product }) {
  const { id, name, imageUrls, shortDescription, price } = product

  return (
    <Link
      href={`/products/${id}#product-details`}
      className="group block bg-inherit border-[.04rem] border-gray-700 p-4 rounded-lg shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-3 focus:ring-gray-900 relative overflow-hidden"
    >
      <div>
        {imageUrls && imageUrls.length > 0 && (
          <div className="relative w-full h-48 mb-2">
            <Image
              src={imageUrls[0] || "/placeholder.svg"}
              alt={`${name} - First Image`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        )}
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-400 mb-4">{shortDescription}</p>
        <div className="flex justify-between items-center">
          {price !== undefined && (
            <span className="text-lg font-bold text-white">
              <span className="text-xs font-normal pb-0 mb-0">FOR SALE</span>
              <br />${price.toFixed(2)}
            </span>
          )}
          <span className="inline-block border-[.04rem] border-gray-200 my-2 p-4 text-white py-2 px-4 rounded transition-transform hover:scale-105 hover:bg-[rgb(1,1,1)]">
            View Details
          </span>
        </div>
      </div>
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-[100%] h-32 bg-gradient-radial from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-[30%] transition-opacity duration-300 ease-in-out rounded-[85%]"></div>
    </Link>
  )
}
