import { notFound } from 'next/navigation';
import database from '@/prisma/database';
import Link from 'next/link';
import Hero from '@/components/Hero';
import dynamic from 'next/dynamic';

const Lightbox = dynamic(() => import('@/components/Lightbox'), { ssr: false });

export default async function ProductPage({ params }) {
  const productId = parseInt(params.id);
  const product = await database.product.findUnique({
    where: { id: productId },
  });

  if (!product) {
    return notFound();
  }

  const firstImage = product.imageUrls && product.imageUrls.length > 0 ? product.imageUrls[0] : null;
  const remainingImages = product.imageUrls ? product.imageUrls.slice(1) : [];

  return (
    <div className="min-h-screen bg-inherit text-white mt-24">
      <Hero />
      <div className="mt-24 p-8">
        <div className="max-w-4xl mx-auto">

          <div className="mb-4">
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="mb-2 text-gray-400">{product.shortDescription}</p>
          </div>

          {firstImage && (
            <img
              src={firstImage}
              alt={`${product.name} - Main Image`}
              className="w-full h-96 object-cover rounded-lg mb-4"
            />
          )}

          <p className="text-xl mb-4">{product.description}</p>

          <div className="w-full bg-inherit p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-2 rounded-lg shadow-sm">
                  <div className="mb-3">
                    <p className="mb-2">
                      <small><small>MODEL NO.</small></small>
                    </p>
                    <p className="p-2 border border-gray-500 rounded w-[100px] text-gray-400 text-center">
                      <small>{product.modelNumber}</small>
                    </p>
                  </div>
                  <div className="mb-3">
                    <p className="mb-2">
                      <small><small>AVAILABILITY</small></small>
                    </p>
                    {product.quantity > 0 ? (
                      <p className="p-2 border border-green-500 rounded w-[100px] text-green-400 text-center">
                        <small>IN STOCK</small>
                      </p>
                    ) : (
                      <p className="p-2 border border-red-500 rounded w-[100px] text-red-400 text-center">
                        <small>SOLD OUT</small>
                      </p>
                    )}
                  </div>
                  <div className="mb-3">
                    <p className="mb-2">
                      <small><small>PRICE</small></small>
                    </p>
                    <h3 className="text-xl font-bold p-2 border border-blue-500 rounded w-[100px] text-blue-400 text-center">
                      ${product.price.toFixed(2)}
                    </h3>
                  </div>
                  <div className="mb-3">
                    <p className="mt-6 mb-0 pb-0">
                      <small><small>QTY.</small></small><br />
                      <input type="number" name="quantity" className="input bg-inherit border border-gray-200 w-10 mb-4" value={1} /><br />
                    </p>

                    <Link
                      href="/add-to-cart"
                      className="bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold py-1 px-2 rounded inline-block"
                    >
                      Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="p-2 rounded-lg shadow-sm">
                  <div className="">
                    <p className="mb-4"><small><small>PRODUCT TAGS: {product.tags.join(', ')}</small></small></p>
                  </div>
                </div>
                <div className="p-2 rounded-lg shadow-sm">
                  <div className="mt-6 w-full text-center">
                    <center>
                      <img
                        src="/PROUDLY_DESIGNED_AND_ASSEMBLED_IN_THE_USA__FLAG.png"
                        alt="All completed products are proudly designed and assembled in the USA."
                        aria-label="USA flag with text PROUDLY DESIGNED AND ASSEMBLED IN THE USA"
                        className="w-[200px] h-auto"
                      />
                    </center>
                  </div>
                  <p className="mb-2 pt-[20px]">
                    <small><small>THIS PRODUCT SHIPS FROM DESTIN, FL 32541&nbsp;&nbsp;USA. SHIPPING AND HANDLING ARE AN ADDITIONAL $20.00 TO ANYWHERE IN THE CONTIGUOUS UNITED STATES EXCL. HI, PR, AK, INTL SHIPPING AVAILABLE AT YOUR COST.</small></small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {remainingImages.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Additional Images</h2>
              <Lightbox images={[firstImage, ...remainingImages]} />
            </div>
          )}



          <div className="mt-[75px] text-center">
            <Link href="/products" className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold py-1 px-2 rounded inline-block">
              Back to All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
