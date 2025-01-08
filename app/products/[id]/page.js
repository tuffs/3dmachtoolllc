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
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          {firstImage && (
            <img
              src={firstImage}
              alt={`${product.name} - Main Image`}
              className="w-full h-96 object-cover rounded-lg mb-4"
            />
          )}
          <p className="text-xl mb-4">{product.shortDescription}</p>
          <div className="py-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-2xl font-semibold mb-2">Details</h2>
            <p className="mb-2"><strong>Model Number:</strong> {product.modelNumber}</p>
            <p className="mb-2"><strong>Price:</strong> ${product.price.toFixed(2)}</p>
            {product.quantity > 0 ? '' : (
              <>
                <p className="text-red-500 mb-2">
                  SOLD OUT, CONTACT US FOR LEAD TIME ON MORE
                </p>
              </>
            )}
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p>{product.description}</p>
          </div>
          {remainingImages.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Additional Images</h2>
              <Lightbox images={[firstImage, ...remainingImages]} />
            </div>
          )}
          <Link href="/products" className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold py-1 px-2 rounded inline-block">
            Back to All Products
          </Link>

          <div className="mt-[75px]">
            <p className="mb-4"><strong>Tags:</strong> {product.tags.join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
